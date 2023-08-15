import { googleAuth, auth } from "@config/firebase/firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ClientService } from "@service/Client.service";
import { AuthenticationService } from "@service/Authentication.service";
import { ERoles } from "@enums/ERoles";
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
        const login = await authenticationService.loginWithGoogle(ERoles.Client);
        if(login === true){
            navigate("/client");
            toastMessage("Login feito com sucesso", "success");
        };
    };
    
    const onSubmit = async () => {
        const login: boolean = await authenticationService.loginWithEmailAndPassword(
            watch("email"),
            watch("password"),
            ERoles.Client
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
