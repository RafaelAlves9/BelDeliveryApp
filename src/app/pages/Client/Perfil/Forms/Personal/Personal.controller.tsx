import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useAppSelector } from "@store/Store";
import { TClientUserDataSchemaResponse } from "@response/ClientResponse";
import { ClientService } from "@service/Client.service";
import { toastMessage } from "@utils/toastMessage";
import { useDispatch } from "react-redux";
import { setLoading } from "@store/reducers/loading/loadingSlice";

const UsePersonalController = () => {
    const { client } = useAppSelector((state) => state.clientData);
    const clientService = new ClientService();
    const dispatch = useDispatch();
    
    const { watch, register, reset, handleSubmit, formState: {errors} } = useForm<TClientUserDataSchemaResponse>({
    });
    
    const onSubmit = async () => {
        await updateClient();
    };

    const setterFormValue = (client: TClientUserDataSchemaResponse) => {
        reset(client);
    };

    const updateClient = async () => {
        dispatch(setLoading(true));
        const result = await clientService.updateClientProfile(watch());
        dispatch(setLoading(false));
        if(!!result){
            toastMessage("Perfil editado com sucesso", "success");
        }else{
            toastMessage("Erro ao editar perfil", "error");
        };
    };

    useEffect(() => {
      if(!!client.id_user){
        setterFormValue(client);
      }
    }, [client]);

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

export default UsePersonalController;
