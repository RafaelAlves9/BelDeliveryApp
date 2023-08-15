import { useState } from "react";
import { useForm } from "react-hook-form";
import { AuthenticationService } from "@service/Authentication.service";
import { useNavigate } from "react-router-dom";
import { toastMessage } from "@utils/toastMessage";

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

    const { watch, register, handleSubmit, formState: {errors} } = useForm<IFormValue>({
        defaultValues: {
            email: "",
            password: ""
        }
    });

    const googleSingIn = async () => {
        const login = await authenticationService.loginWithGoogle("client");
        if(login === true){
            navigate("/client");
            toastMessage("Login feito com sucesso", "success");
        }else {
            toastMessage("Não foi possível fazer login com o Google", "error");
        };
    };
    
    const onSubmit = async () => {
        const login: boolean = await authenticationService.loginWithEmailAndPassword(
            watch("email"),
            watch("password"),
            "client"
        );
        if(login){
            navigate("/client");
            toastMessage("Login feito com sucesso", "success");
        }else {
            toastMessage("Email ou senha inválidos", "error");
        };
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
