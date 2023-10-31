import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useAppSelector } from "@store/Store";
import { AddressService } from "@service/Address.service";
import { TAddressSchemaResponse } from "@response/AddressSchemaResponse";
import { TAddressRegisterSchema } from "@request/AddressSchemaRequest";
import { useDispatch } from "react-redux";
import { setLoading } from "@store/reducers/loading/loadingSlice";
import { getLocalStorageProperty } from "@utils/getLocalStorageProperty";

const UseAddressController = () => {
    const { client } = useAppSelector((state) => state.clientData);
    const addressService = new AddressService();
    const dispatch = useDispatch();
    const userId = getLocalStorageProperty("logged", "id");

    const { watch, setValue, reset, register,  handleSubmit, formState: {errors} } = useForm<TAddressSchemaResponse>({
        defaultValues: {
            cep: "",
            city: "",
            complement: "",
            country: "",
            createdDate: new Date(),
            number: "",
            id_user: "",
            state: "",
            streeth: "",
        }
    });
    
    const onSubmit = async () => {
        if(!!watch("id_user")){
            updateAddress();
        }else{
            postAddress();
        };
    };
    
    const postAddress = async () => {
        dispatch(setLoading(true));
        await addressService.postAddress(bodyPostAddress());
        dispatch(setLoading(false));
    };
    
    const updateAddress = async () => {
        dispatch(setLoading(true));
        await addressService.updateAddress(bodyUpdateAddress());
        dispatch(setLoading(false));
    };
    
    const bodyPostAddress = ():TAddressRegisterSchema => {
        const address: TAddressRegisterSchema = {
            cep: watch("cep"),
            city: watch("city"),
            complement: watch("complement"),
            country: watch("country"),
            createdDate: new Date(),
            number: watch("number"),
            state: watch("state"),
            streeth: watch("streeth"),
            id_user: userId,
        };
        console.log("address", address);

        return address;
    };
    
    const bodyUpdateAddress = (): TAddressRegisterSchema => {
        const address: TAddressRegisterSchema = {
            cep: watch("cep"),
            city: watch("city"),
            complement: watch("complement"),
            country: watch("country"),
            createdDate: watch("createdDate"),
            number: watch("number"),
            state: watch("state"),
            streeth: watch("streeth"),
            id_user: userId,
        };

        return address;
    };

    const getAddressByCep = async () => {
        if(watch("cep").length < 6) return;
        const result = await addressService.getCep(watch("cep"));
        if(!!result.cep){
            setValue("streeth", result.logradouro);
            setValue("city", result.localidade);
            setValue("state", result.uf);
        };
    };

    const getAddressById = async () => {
        const result = await addressService.getAddressByIdUser(userId);
        if(!!result.id_user){
            reset(result);
        };
    };

    useEffect(() => {
        getAddressByCep();
    }, [watch("cep")]);

    useEffect(() => {
        getAddressById();
    }, []);

    return {
        Actions: {
            handleSubmit: handleSubmit,
            onSubmit: onSubmit,
        },
        States: {
            errors: errors,
            watch: watch,
            client
        },
        Setters: {
            register: register
        },
    };
};

export default UseAddressController;
