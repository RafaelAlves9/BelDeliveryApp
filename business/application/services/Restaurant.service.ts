import { IClientInterface } from "../Interfaces/IRestaurant.interface";
import { db } from "../../../config/firebase/firebaseConfig";
import { getDoc, doc } from 'firebase/firestore';
import { TRestaurantDataSchemaResponse } from "../../models/entities/response/RestaurantResponse";
import { Base } from "./Base.service";

export class RestaurantService extends Base implements IClientInterface {

    async getRestaurant(id: string): Promise<TRestaurantDataSchemaResponse | null> {
        try{
            const client = await getDoc(doc(db, 'restaurant', id));
            if(client.exists()){
                const clientData = client.data() as TRestaurantDataSchemaResponse;
                return clientData;
            } else {
                this.message("Erro no carregamento");
                return null;
            };
        } catch (error: any){
            return null;
        };
    };
};
