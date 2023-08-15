import { auth, googleAuth } from "@config/firebase/firebaseConfig";
import { IAuthenticationInterface } from "../Interfaces/IAuthentication.interface";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { db } from "@config/firebase/firebaseConfig";
import { getDoc, where, query, collection, getDocs } from 'firebase/firestore';

export class AuthenticationService implements IAuthenticationInterface {

    async loginWithGoogle(): Promise<any> {
        await signInWithPopup(auth, googleAuth)
        .then(async (res) => {
            const isRegistred = await this.checkUserExist(res.user.uid);
            if(isRegistred){
                
            }else {

            };
        })
        .catch((error) => {
            console.log("error", error);
        })
    };

    async loginWithEmailAndPassword(email: string, password: string): Promise<any> {
        await signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
            console.log("res", res);
            return true;
        })
        .catch((error) => {
            return true;
        });
    };

    
    async checkUserExist(idUSer: string): Promise<any> {
        const documentation = query(collection(db, 'user'), where("id_user", "==", idUSer));
        await getDocs(documentation)
        .then((res) => {
            if(res.size > 0){
                return true;
            } else false;
        })
        .catch((error) => {

        });
    };
};
