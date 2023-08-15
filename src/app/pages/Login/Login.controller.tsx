import { useState } from "react";
import { useForm } from "react-hook-form";
import { AuthenticationService } from "@service/Authentication.service";
import { useNavigate } from "react-router-dom";
import { toastMessage } from "@utils/toastMessage";
import { useDispatch } from "react-redux";
import { setLoading } from "@store/reducers/loading/loadingSlice";

export enum ELoginStep {
    Initial=1,
    Email
};
export interface IFormValue {
    email: string;
    password: string;
};

const UseLoginController = () => {
    const [loginStepScreen, setLoginStepScreen] = useState<ELoginStep>(ELoginStep.Initial);
    const authenticationService = new AuthenticationService();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { watch, register, handleSubmit, formState: {errors} } = useForm<IFormValue>({
        defaultValues: {
            email: "",
            password: ""
        }
    });

    const googleSingIn = async () => {
        dispatch(setLoading(true));
        await authenticationService.loginWithGoogle("client")
        .then((res) => {
            if(res === true){
                navigate("/");
                toastMessage("Login feito com sucesso", "success");
            }else {
                toastMessage("Não foi possível fazer login com o Google", "error");
            };
        })
        .finally(() => {
            dispatch(setLoading(false));
        });
    };
    
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

    return {
        Actions: {
            googleSingIn: googleSingIn,
            setLoginStepScreen: setLoginStepScreen,
            handleSubmit: handleSubmit,
            onSubmit: onSubmit,
        },
        States: {
            loginStepScreen: loginStepScreen,
            errors: errors,
            watch: watch,
        },
        Setters: {
            register: register
        },
    };
};

export default UseLoginController;
