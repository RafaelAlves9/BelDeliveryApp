import { TRestaurantDataSchemaResponse } from "@response/RestaurantResponse";
import * as Styles from "./RestaurantCard.styles";
import { useNavigate } from "react-router-dom";

interface ICard {
    restaurant: TRestaurantDataSchemaResponse
};
 
const RestaurantCard = ({ restaurant }: ICard) => {
    const navigate = useNavigate();

    return(
        <Styles.Card onClick={() => navigate("/")}>
            <div>
                <img src="https://as1.ftcdn.net/v2/jpg/03/16/30/30/1000_F_316303014_qzT0VBwBMuIDOzTjEpvcuKvIoEo0Yz1E.jpg" alt="" />
            </div>
            <div>
                <p>{restaurant.name}</p>
                <p>{restaurant.category}</p>
                <p>{restaurant.deliveryTimeMin}-{restaurant.deliveryTimeMax} minutos</p>
                <p>R$ {restaurant.deliveryValue}</p>
            </div>
        </Styles.Card>
    );
};

export default RestaurantCard;