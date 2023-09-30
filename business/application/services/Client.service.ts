import { IClientInterface } from "../Interfaces/IClient.interface";
import { db } from "../../../config/firebase/firebaseConfig";
import { getDocs, collection, query, where } from 'firebase/firestore';
import { TClientUserDataSchemaResponse } from "../../models/entities/response/ClientUserDataResponse";

export class ClientService implements IClientInterface {

    async getClient(id: string): Promise<TClientUserDataSchemaResponse> {
        try{
            const queryDoc = await query(collection(db, "client"), where("id_user", "==", id));
            const client = await getDocs(queryDoc);
           
            if(client.size > 0){
                const clientData = client.docs[0].data() as TClientUserDataSchemaResponse;
                console.log("clientData", clientData)
                return clientData;
            } else {
                throw new Error("Usuário não encontrado");
            };
        } catch (error){
            throw error;
        };
    };
};
