import Footer from "@shared/Footer/Footer";
import * as Styled from "./FragmentDefault.styles";
import Sidebar from "@shared/Sidebar/Sidebar";
import { Fragment, useEffect } from "react";
import { ClientService } from "@service/Client.service";
import { RestaurantService } from "@service/Restaurant.service";
import { getLocalStorageProperty } from "@utils/getLocalStorageProperty";
import { useDispatch } from "react-redux";
import { setClientData } from "@store/reducers/clientData/clientDataSlice";
import { setRestaurantData } from "@store/reducers/restaurantData/restaurantDataSlice";
import { useAppSelector } from "@store/Store";
import { setLoading } from "@store/reducers/loading/loadingSlice";

type Props = {
    children: React.ReactNode;
};

const FragmentDefault = ({ children }: Props) => {
    const { client } = useAppSelector((state) => state.clientData);
    const { restaurant } = useAppSelector((state) => state.restaurantData);
    const id = getLocalStorageProperty("logged", "id");
    const role = getLocalStorageProperty("logged", "role");
    const dispatch = useDispatch();
    const clientService = new ClientService();
    const restaurantService = new RestaurantService();

    const getClient = async () => {
        console.log("client", client);
        
        if(client.id_user.length > 0) return;
        const user = await clientService.getClient(id);
        console.log("client", user);
        if(!!user.id_user) dispatch(setClientData(user));
    };

    const getRestaurant = async () => {
        if(restaurant.id_user.length > 0) return;
        const user = await restaurantService.getRestaurant(id);
        if(!!user) dispatch(setRestaurantData(user));
    };

    const switchRoleByGetUserData = async () => {
        dispatch(setLoading(true));
        if(role === "restaurant"){
            await getRestaurant();
        }else if (role === "client"){
            await getClient();
        };
        dispatch(setLoading(false));
    };

    useEffect(() => {
        switchRoleByGetUserData();
    }, []);

    return (
        <Fragment>
            <Sidebar />
            <Styled.ContentDefault>
                {children}
            </Styled.ContentDefault>
            <Footer />
        </Fragment>
    );
};

export default FragmentDefault;