import { googleAuth, auth } from "@config/firebase/firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { UserService } from "@service/User.service";
import { AuthenticationService } from "@service/Authentication.service";

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
    const userService = new UserService();
    const authenticationService = new AuthenticationService();

    const { watch, register, handleSubmit, formState: {errors} } = useForm<IFormValue>({
        defaultValues: {
            email: "",
            password: ""
        }
    });

    const googleSingIn = () => {
        authenticationService.checkUserExist("qweqw");
    };
    
    const onSubmit = async () => {
        authenticationService.loginWithEmailAndPassword(
            watch("email"),
            watch("password")
        );
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
