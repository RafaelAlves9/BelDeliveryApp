import { IClientInterface } from "../Interfaces/IRestaurant.interface";
import { db } from "../../../config/firebase/firebaseConfig";
import { getDoc, doc } from 'firebase/firestore';
import { TRestaurantDataSchemaResponse } from "../../models/entities/response/RestaurantUserDataResponse";

export class RestaurantService implements IClientInterface {

    async getRestaurant(id: string): Promise<TRestaurantDataSchemaResponse> {
        try{
            const client = await getDoc(doc(db, 'restaurant', id));
            if(client.exists()){
                const clientData = client.data() as TRestaurantDataSchemaResponse;
                return clientData;
            } else {
                throw new Error("Usuário não encontrado");
            };
        } catch (error){
            throw error;
        };
    };
};
