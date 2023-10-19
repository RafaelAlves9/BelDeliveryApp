import { TRestaurantDataSchemaResponse } from "../../models/entities/response/RestaurantResponse";

export interface IClientInterface {
    getRestaurant(id: string): Promise<TRestaurantDataSchemaResponse | null>;
};
