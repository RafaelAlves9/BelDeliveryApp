import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useAppSelector } from "@store/Store";
import { AddressService } from "@service/Address.service";
import { TAddressSchemaResponse } from "@response/AddressSchemaResponse";
import { TAddressRegisterSchema } from "@request/AddressSchemaRequest";
import { useDispatch } from "react-redux";
import { setLoading } from "@store/reducers/loading/loadingSlice";

const UseAddressController = () => {
    const { client } = useAppSelector((state) => state.clientData);
    const addressService = new AddressService();
    const dispatch = useDispatch();

    const { watch, setValue, reset, register,  handleSubmit, formState: {errors} } = useForm<TAddressSchemaResponse>({
    });
    
    const onSubmit = async () => {
        if(!!client.address.id_user){
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
            id_user: client.id_user,
        };

        return address;
    };
    
    const bodyUpdateAddress = (): TAddressRegisterSchema => {
        const address: TAddressRegisterSchema = {
            cep: watch("cep"),
            city: watch("city"),
            complement: watch("complement"),
            country: watch("country"),
            createdDate: client.address.createdDate,
            number: watch("number"),
            state: watch("state"),
            streeth: watch("streeth"),
            id_user: client.id_user,
        };

        return address;
    };

    const setterFormValue = (address: TAddressSchemaResponse) => {
        reset(address);
    };

    const getAddressByCep = async () => {
        const result = await addressService.getCep(watch("cep"));
        if(!!result.cep){
            setValue("streeth", result.logradouro);
            setValue("city", result.localidade);
            setValue("state", result.uf);
        };
    };

    useEffect(() => {
        if(watch("cep")?.length > 6){
            getAddressByCep();
        };
    }, [watch("cep")]);

    useEffect(() => {
      if(!!client.address.id_user){
        setterFormValue(client.address);
      };
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
