import { googleAuth, auth } from "@config/firebase/firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { useForm } from "react-hook-form";

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

    const { watch, register, handleSubmit, formState: {errors} } = useForm<IFormValue>({
        defaultValues: {
            email: "",
            password: ""
        }
    })

    const googleSingIn = () => {
        signInWithPopup(auth, googleAuth)
        .then((res) => {
            console.log("res", res);
        })
        .catch((error) => {
            console.log("error", error);
        })
    };
    
    const onSubmit = async () => {
        
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
