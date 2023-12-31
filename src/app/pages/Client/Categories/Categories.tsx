import FragmentDefault from "@shared/FragmentDefault/FragmentDefault";
import * as Styles from "./Categories.styles";
import { useNavigate, useParams } from "react-router-dom";
import Img from "@assets/pizza-logo.jpg"
import UseCategoriesController from "./Categories.controller";
import RestaurantCard from "@shared/RestaurantCard/RestaurantCard";

const Categories = () => {
    const { States } = UseCategoriesController();

    const toUpperCaseFirstWord = (name?: string) => {
        if(!!name) return name.charAt(0).toUpperCase() + name.slice(1);
    };

    return(
        <FragmentDefault>
            <Styles.Container>
                <h1>Categoria {toUpperCaseFirstWord(States.category)}</h1>
                <h2>Lista de Restaurantes</h2>
                
                <Styles.Content>
                    {!!States.restaurantList && States.restaurantList.map((restaurante, index) => 
                        <RestaurantCard
                            key={index}
                            restaurant={restaurante}
                        />
                    )}
                </Styles.Content>

            </Styles.Container>
        </FragmentDefault>
    );
};

export default Categories;