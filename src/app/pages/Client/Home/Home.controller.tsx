import { useForm } from "react-hook-form";
import { AuthenticationService } from "@service/Authentication.service";
import { useNavigate } from "react-router-dom";
import { toastMessage } from "@utils/toastMessage";
import { useDispatch } from "react-redux";
import { setLoading } from "@store/reducers/loading/loadingSlice";
import { useEffect } from "react";
import { useAppSelector } from "@store/Store";

export enum ELoginStep {
    Initial=1,
    Email
};
export interface IFormValue {
    email: string;
    password: string;
};

const UseHomeController = () => {
    const { client } = useAppSelector((state) => state.clientData);
    const authenticationService = new AuthenticationService();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { watch, register, handleSubmit, formState: {errors} } = useForm<IFormValue>({
        defaultValues: {
            email: "",
            password: ""
        }
    });
    
    const onSubmit = async () => {
        dispatch(setLoading(true));
        await authenticationService.loginWithEmailAndPassword(
            watch("email"),
            watch("password"),
            "client"
        )
        .then((res) => {
            if(res){
                navigate("/");
                toastMessage("Login feito com sucesso", "success");
            }else {
                toastMessage("Email ou senha inválidos", "error");
            };
        })
        .finally(() => {
            dispatch(setLoading(false));
        });
    };

    useEffect(() => {
      
    }, []);

    return {
        Actions: {
            handleSubmit: handleSubmit,
            onSubmit: onSubmit,
        },
        States: {
            errors: errors,
            watch: watch,
            client: client
        },
        Setters: {
            register: register
        },
    };
};

export default UseHomeController;
