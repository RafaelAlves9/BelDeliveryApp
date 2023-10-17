import { auth, googleAuth } from "@config/firebase/firebaseConfig";
import { IAuthenticationInterface } from "../Interfaces/IAuthentication.interface";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { db } from "@config/firebase/firebaseConfig";
import { where, query, collection, getDocs, addDoc } from 'firebase/firestore';
import { TRole } from "../../models/types/TRole";
import { TRegisterUserSchema } from "@request/UserSchema";

export class AuthenticationService implements IAuthenticationInterface {

    async loginWithGoogle(role: TRole): Promise<boolean> {
        try {
            const login = await signInWithPopup(auth, googleAuth);
            const isRegistred = await this.checkUserExist(login.user.uid, role);

            if (!isRegistred) {
                const newUser: TRegisterUserSchema = {
                    cellPhone: !!login.user.phoneNumber ? login.user.phoneNumber : "",
                    createdDate: new Date(),
                    email: !!login.user.email ? login.user.email : "",
                    id_user: login.user.uid,
                    isActive: true,
                    userName: !!login.user.displayName ? login.user.displayName : "",
                    dateOfBirth: null,
                    gender: "",
                    inactiveDate: null
                };
                const client = await this.registerClientProfile(newUser);

                if(!client || client === null) return false;
            };
            
            this.setLocalUserData(login.user.uid, role);
            return true;
        } catch (error) {
            return false;
        };
    };

    async loginWithEmailAndPassword(email: string, password: string, role: TRole): Promise<boolean> {
        try{
            const login = await signInWithEmailAndPassword(auth, email, password);
            if(login.user){
                this.setLocalUserData(login.user.uid, role);
                return true;
            } else return false;
        }
        catch (error){
            return false;
        };
    };
    
    async setLocalUserData(id: string, role: TRole): Promise<any> {
        const userData = {id, role};
        
        localStorage.setItem("logged", JSON.stringify(userData));
    };
    
    async checkUserExist(idUSer: string, type: string): Promise<boolean> {
        const documentation = query(collection(db, type), where("id_user", "==", idUSer));
        const querySnapshot = await getDocs(documentation);
        
        return querySnapshot.size > 0;
    };
    
    async registerClientProfile(user: TRegisterUserSchema): Promise<boolean> {
        const clientRef = collection(db, "client");
        const resultClient = await addDoc(clientRef, user);
        
        if(!!resultClient.id){
            return true;
        };
        return false;
    };
};


