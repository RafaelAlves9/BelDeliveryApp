import { useEffect, useState } from "react";
import { RestaurantService } from "@service/Restaurant.service";
import { TRestaurantDataSchemaResponse } from "@response/RestaurantResponse";

export interface IFormValue {
    email: string;
    password: string;
};

const UseRestauranteListController = () => {
    const restaurantService = new RestaurantService();
    const [restaurantList, setRestaurantList] = useState<TRestaurantDataSchemaResponse[]>([]);

    const getRestaurantList = async () => {
        const result = await restaurantService.getRestaurantList();

        if(result !== null) setRestaurantList(result);
    };

    useEffect(() => {
        getRestaurantList();
    }, []);

    return {
        Actions: {
            
        },
        States: {
            restaurantList
        },
        Setters: {
            
        },
    };
};

export default UseRestauranteListController;
