import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useAppSelector } from "@store/Store";
import { AddressService } from "@service/Address.service";
import { TAddressSchemaResponse } from "@response/AddressSchemaResponse";

const UseAddressController = () => {
    const { client } = useAppSelector((state) => state.clientData);
    const addressService = new AddressService();

    const { watch, setValue, register, reset, handleSubmit, formState: {errors} } = useForm<TAddressSchemaResponse>({
    });
    
    const onSubmit = async () => {
       
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
      if(!!client.id_user){
        setterFormValue(client.address);
      }
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
