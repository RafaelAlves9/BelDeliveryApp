import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { RestaurantService } from "@service/Restaurant.service";
import { TRestaurantDataSchemaResponse } from "@response/RestaurantResponse";

const UseCategoriesController = () => {
    const restaurantService = new RestaurantService();
    const { category } = useParams();
    const [restaurantList, setRestaurantList] = useState<TRestaurantDataSchemaResponse[]>([]);

    const getRestaurantListByCategory = async () => {
        if(category === undefined) return;
        const result = await restaurantService.getRestaurantListByCategory(category);

        if(result !== null) setRestaurantList(result);
    };

    useEffect(() => {
        getRestaurantListByCategory();
    }, [category]);

    useEffect(() => {
      
    }, []);

    return {
        Actions: {
        },
        States: {
            restaurantList,
            category
        },
        Setters: {
        },
    };
};

export default UseCategoriesController;
