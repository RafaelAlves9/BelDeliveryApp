import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useAppSelector } from "@store/Store";
// import { ClientService } from "@service/Client.service";
import { TClientUserDataSchemaResponse } from "@response/ClientUserDataResponse";

const UseAddressController = () => {
    const { client } = useAppSelector((state) => state.clientData);
    // const clientService = new ClientService();

    const { watch, register, reset, handleSubmit, formState: {errors} } = useForm<TClientUserDataSchemaResponse>({
    });
    
    const onSubmit = async () => {
       
    };

    const setterFormValue = (client: TClientUserDataSchemaResponse) => {
        reset(client);
    };

    useEffect(() => {
      if(!!client.id_user){
        setterFormValue(client);
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
