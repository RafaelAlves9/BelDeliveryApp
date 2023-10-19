import Footer from "@shared/Footer/Footer";
import * as Styled from "./FragmentDefault.styles";
import Sidebar from "@shared/Sidebar/Sidebar";
import { Fragment, useEffect } from "react";
import { ClientService } from "@service/Client.service";
import { RestaurantService } from "@service/Restaurant.service";
import { getLocalStorageProperty } from "@utils/getLocalStorageProperty";
import { useDispatch } from "react-redux";
import { setAddressData, setClientData } from "@store/reducers/clientData/clientDataSlice";
import { setRestaurantData } from "@store/reducers/restaurantData/restaurantDataSlice";
import { useAppSelector } from "@store/Store";
import { setLoading } from "@store/reducers/loading/loadingSlice";
import { AddressService } from "@service/Address.service";

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
    const addressService = new AddressService();

    const getClient = async () => {
        if(client.id_user.length > 0) return;
        const user = await clientService.getClient(id);
        dispatch(setClientData(user));
    };

    const getRestaurant = async () => {
        if(restaurant.id_user.length > 0) return;
        const user = await restaurantService.getRestaurant(id);
        if(!!user) dispatch(setRestaurantData(user));
    };

    const getAddress = async () => {
        if(!!client.address.id_user) return;
        const address = await addressService.getAddressByIdUser(id);
        dispatch(setAddressData(address));
    };

    const switchRoleByGetUserData = async () => {
        dispatch(setLoading(true));
        if(role === "restaurant"){
            await getRestaurant();
        }else if (role === "client"){
            await getClient();
        };
        await getAddress();
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