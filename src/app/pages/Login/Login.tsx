import * as React from "react";
import * as styles from "./Login.styles";
import UseLoginController, { ELoginStep } from "./Login.controller";
import LogoGoogle from "@assets/google_logo.webp";
import { HiOutlineMail } from 'react-icons/hi';
import { BiChevronLeft } from 'react-icons/bi';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { Actions, States, Setters } = UseLoginController();
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const navigate = useNavigate();

    const screenRender = () => {
        if(States.loginStepScreen === ELoginStep.Initial){
            return switchLoginForm();
        } else {
            return emailLoginForm();
        };
    };
    
    const switchLoginForm = () => {
        return(
            <React.Fragment>
                <styles.Tittle>Cadastre-se ou faça o login para continuar</styles.Tittle>
                <styles.ButtonsActionsContainer>
                    <styles.ButtonAction
                        number={1}
                        onClick={(() => Actions.googleSingIn())}
                        id="loginWithGoogle"
                    >
                        <img src={LogoGoogle} alt="" />
                        Continuar com Google
                    </styles.ButtonAction>
                    <styles.ButtonAction
                        number={2}
                        onClick={() => Actions.setLoginStepScreen(ELoginStep.Email)}
                        id="loginWithEmail"
                    >
                        <styles.EmailIcon>
                            <HiOutlineMail />
                        </styles.EmailIcon>
                        Continuar com Email
                    </styles.ButtonAction>
                    <styles.ButtonAction
                        number={3}
                        id="register"
                        onClick={() => navigate("/register")}
                    >
                        Não tenho conta
                    </styles.ButtonAction>
                </styles.ButtonsActionsContainer>
            </React.Fragment>
        );
    };
    
    const emailLoginForm = () => {
        return(
            <styles.EmailFormContainer onSubmit={Actions.handleSubmit(Actions.onSubmit)}>
                <styles.BackStep
                    onClick={() => Actions.setLoginStepScreen(ELoginStep.Initial)}
                    id="backLoginHome"
                >
                    <BiChevronLeft />
                    <p>Voltar</p>
                </styles.BackStep>
                <styles.Tittle>Digite seu e-mail e senha</styles.Tittle>

                <styles.Input
                    {...Setters.register("email",
                    {required: true, validate: (value) => {
                        return regexEmail.test(value);
                    }})}
                    placeholder="E-mail"
                    id="email"
                >
                </styles.Input>
                {States.errors.email?.type === "required" && (
                    <styles.ErrorMessenge>Campo obrigatório</styles.ErrorMessenge>
                )}
                {States.errors.email?.type === "validate" && (
                    <styles.ErrorMessenge>Digite um email válido</styles.ErrorMessenge>
                )}

                <styles.Input
                    {...Setters.register("password",
                    {required: true, validate: (value) => {
                        return value.length >= 6 && value.length <= 60;
                    }})}
                    placeholder="Senha"
                    id="password"
                    type="password"
                >
                </styles.Input>
                {States.errors.password?.type === "required" && (
                    <styles.ErrorMessenge>Campo obrigatório</styles.ErrorMessenge>
                )}
                {States.errors.password?.type === "validate" && (
                    <styles.ErrorMessenge>Senha deve ter entre 6 a 60 caracteres</styles.ErrorMessenge>
                )}

                <styles.ConfirmButton
                    type="submit"
                    id="submit"
                >
                    Continuar
                </styles.ConfirmButton>
            </styles.EmailFormContainer>
        );
    };

    return(
        <styles.Container>
            <styles.ContainerLogo>
            </styles.ContainerLogo>

            <styles.ContainerForm>
                {screenRender()}
            </styles.ContainerForm>
        </styles.Container>
    );
};

export default Login;