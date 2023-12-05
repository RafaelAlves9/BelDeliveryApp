import FragmentDefault from "@shared/FragmentDefault/FragmentDefault";
import * as Styles from "./RestaurantList.styles";
import UseRestauranteListController from "./RestaurantList.controller";
import RestaurantCard from "@shared/RestaurantCard/RestaurantCard";

const RestaurantList = () => {
    const { States } = UseRestauranteListController();

    return(
        <FragmentDefault>
            <Styles.Container>
                <h1>Meus pedidos</h1>
                <h2>Histórico</h2>
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

export default RestaurantList;