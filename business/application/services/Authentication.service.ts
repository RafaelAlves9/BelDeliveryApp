import { auth, googleAuth } from "@config/firebase/firebaseConfig";
import { IAuthenticationInterface } from "../Interfaces/IAuthentication.interface";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { db } from "@config/firebase/firebaseConfig";
import { where, query, collection, getDocs } from 'firebase/firestore';
import { ERoles } from "@enums/ERoles";
import { renderRoleLabel } from "@utils/renderRoleLabel";

export class AuthenticationService implements IAuthenticationInterface {

    async loginWithGoogle(role: ERoles): Promise<any> {
        try {
            const login = await signInWithPopup(auth, googleAuth);
            const isRegistered = await this.checkUserExist(login.user.uid);
            
            if (!isRegistered) {
                // registration method
            };
            
            this.setLocalUserData(login.user.uid, role);
            return true;
        } catch (error) {
            console.log("error", error);
            return false;
        };
    };

    async loginWithEmailAndPassword(email: string, password: string, role: ERoles): Promise<boolean> {
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
    
    async setLocalUserData(id: string, loginRole: ERoles): Promise<any> {
        const role = renderRoleLabel(loginRole);
        const userData = {id, role};
        
        localStorage.setItem("logged", JSON.stringify(userData));
    };
    
    async checkUserExist(idUSer: string): Promise<boolean> {
        const documentation = query(collection(db, 'client'), where("id_user", "==", idUSer));
        const querySnapshot = await getDocs(documentation);
        
        return querySnapshot.size > 0;
    };
};
