import { IClientInterface } from "../Interfaces/IClient.interface";
import { db } from "../../../config/firebase/firebaseConfig";
import { getDocs, collection, query, where, updateDoc, addDoc } from 'firebase/firestore';
import { TClientUserDataSchemaResponse } from "../../models/entities/response/ClientResponse";
import { TRegisterUserSchema } from "@request/UserSchema";

export class ClientService implements IClientInterface {

    async getClient(id: string): Promise<TClientUserDataSchemaResponse> {
        try{
            const queryDoc = query(collection(db, "client"), where("id_user", "==", id));
            const client = await getDocs(queryDoc);
           
            if(client.size > 0){
                const clientData = client.docs[0].data() as TClientUserDataSchemaResponse;
                return clientData;
            } else {
                throw new Error("Usuário não encontrado");
            };
        } catch (error){
            throw error;
        };
    };
    
    async registerClientProfile(user: TRegisterUserSchema): Promise<boolean> {
        const clientRef = collection(db, "client");
        const resultClient = await addDoc(clientRef, user);
        
        if(!!resultClient.id){
            return true;
        };
        return false;
    };
    
    async updateClientProfile(user: TRegisterUserSchema): Promise<boolean> {
        const clientRef = collection(db, "client");
        const q = query(clientRef, where("id_user", "==", user.id_user));
        
        try {
            const querySnapshot = await getDocs(q);
            if (!querySnapshot.empty) {
                const clientDoc = querySnapshot.docs[0];
                await updateDoc(clientDoc.ref, user);
                return true;
            } else {
                return false;
            };
        } catch (error: any) {
            return false;
        }
    };
};
