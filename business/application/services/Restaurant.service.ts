import { IClientInterface } from "../Interfaces/IRestaurant.interface";
import { db } from "../../../config/firebase/firebaseConfig";
import { getDoc, doc, query, collection, where, getDocs, DocumentData, startAt, FirestoreDataConverter, QueryDocumentSnapshot } from 'firebase/firestore';
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
                this.message("Erro no carregamento", "error");
                return null;
            };
        } catch (error: any){
            return null;
        };
    };

    async getRestaurantListByCategory(category: string): Promise<TRestaurantDataSchemaResponse[] | null> {
        try{
            const documentation = query(collection(db, "restaurant"), where("category", "==", category));
            const result = await getDocs(documentation);
            if(!result.empty){
                const restaurantList: TRestaurantDataSchemaResponse[] = result.docs.map(doc => {
                    const data = doc.data() as TRestaurantDataSchemaResponse;
                    return data;
                });
                return restaurantList;
            } else {
                return null;
            };
        } catch (error: any){
            return null;
        };
    };

    async getRestaurantList(): Promise<TRestaurantDataSchemaResponse[] | null> {
        try{
            const documentation = query(collection(db, "restaurant"), where("isActive", "==", true));
            const result = await getDocs(documentation);
            console.log("result", result);
            
            if(!result.empty){
                const restaurantList: TRestaurantDataSchemaResponse[] = result.docs.map(doc => {
                    const data = doc.data() as TRestaurantDataSchemaResponse;
                    return data;
                });
                return restaurantList;
            } else {
                return null;
            };
        } catch (error: any){
            return null;
        };
    };
};
