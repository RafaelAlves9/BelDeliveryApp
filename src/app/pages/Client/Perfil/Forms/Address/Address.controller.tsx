import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useAppSelector } from "@store/Store";
// import { ClientService } from "@service/Client.service";
import { TAddressSchemaResponse } from "@response/AddressResponse";

const UseAddressController = () => {
    const { client } = useAppSelector((state) => state.clientData);
    // const clientService = new ClientService();

    const { watch, register, reset, handleSubmit, formState: {errors} } = useForm<TAddressSchemaResponse>({
    });
    
    const onSubmit = async () => {
       
    };

    const setterFormValue = (address: TAddressSchemaResponse) => {
        reset(address);
    };

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
