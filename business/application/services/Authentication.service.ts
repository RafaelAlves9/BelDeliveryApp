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
                // registration method
            };
            
            this.setLocalUserData(login.user.uid, role);
            return true;
        } catch (error) {
            console.log("error", error);
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
    
    async registerUserProfile(user: TRegisterUserSchema): Promise<boolean> {
        const clientRef = collection(db, "client");
        const resultClient = await addDoc(clientRef, user);
        
        if(!!resultClient.id){
            const addressRef = collection(db, "client", resultClient.id, "address");
            const resultAddress = await addDoc(addressRef, user);

            if(!!resultAddress.id){
                return true;
            };
        };
        return false;
    };
};


