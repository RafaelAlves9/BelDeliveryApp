import { TRestaurantDataSchemaResponse } from "../../models/entities/response/RestaurantUserDataResponse";

export interface IClientInterface {
    getRestaurant(id: string): Promise<TRestaurantDataSchemaResponse>;
};
