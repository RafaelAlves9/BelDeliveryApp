import { IUserInterface } from "../Interfaces/IClient.interface";
import { db } from "../../../config/firebase/firebaseConfig";
import { setDoc, doc } from 'firebase/firestore';
import { getLocalStorageProperty } from "../../../src/utils/getLocalStorageProperty";
import { TAddressUserSchema, TRegisterUserSchema } from "../../models/entities/request/UserSchema";

export class ClientService implements IUserInterface {
    private _idUser = getLocalStorageProperty("user", "id");

    async addressUser(address: TAddressUserSchema): Promise<any> {
        await setDoc(doc(db, 'address'), address)
        .then((res) => {
            console.log("res", res);
            return true;
        })
        .catch((error) => {
            return true;
        });
    };

    async registerUser(user: TRegisterUserSchema): Promise<any> {
        await setDoc(doc(db, 'user'), user)
        .then((res) => {
            console.log("res", res);
        })
        .catch((error) => {

        });
    };
}
