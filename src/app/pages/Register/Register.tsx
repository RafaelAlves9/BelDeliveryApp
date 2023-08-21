import * as styled from "./Register.styles";
import UseRegisterController from "./Register.controller";

const Register = () => {
    const { Actions, States, Setters } = UseRegisterController();
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    return(
        <styled.Container>
            <styled.ContainerLogo>
                
            </styled.ContainerLogo>

            <styled.ContainerForm>
                <styled.EmailFormContainer onSubmit={Actions.handleSubmit(Actions.onSubmit)}>
                    <styled.Tittle>Faça seu cadastro</styled.Tittle>

                    <styled.GridContainer>
                        <styled.InputGroup>
                            <p>Nome</p>
                            <input
                                {...Setters.register("name",
                                {required: true, validate: (value) => {
                                    return value.length >= 3 && value.length < 60;
                                }})}
                                placeholder="Digite"
                                id="name"
                            >
                            </input>
                            {States.errors.name?.type === "required" && (
                                <styled.ErrorMessenge>Campo obrigatório</styled.ErrorMessenge>
                            )}
                            {States.errors.name?.type === "validate" && (
                                <styled.ErrorMessenge>Digite entre 3 a 60 caracteres</styled.ErrorMessenge>
                            )}
                        </styled.InputGroup>
                        
                        <styled.InputGroup>
                            <p>Email</p>
                            <input
                                {...Setters.register("email",
                                {required: true, validate: (value) => {
                                    return regexEmail.test(value);
                                }})}
                                placeholder="Digite"
                                id="email"
                            >
                            </input>
                            {States.errors.email?.type === "required" && (
                                <styled.ErrorMessenge>Campo obrigatório</styled.ErrorMessenge>
                            )}
                            {States.errors.email?.type === "validate" && (
                                <styled.ErrorMessenge>Digite um email válido</styled.ErrorMessenge>
                            )}
                        </styled.InputGroup>

                        <styled.InputGroup>
                            <p>Celular</p>
                            <input
                                {...Setters.register("cellPhone",
                                {required: true, validate: (value) => {
                                    return value.length >= 9 && value.length <= 12;
                                }})}
                                placeholder="Digite"
                                id="cellPhone"
                            >
                            </input>
                            {States.errors.cellPhone?.type === "required" && (
                                <styled.ErrorMessenge>Campo obrigatório</styled.ErrorMessenge>
                            )}
                            {States.errors.cellPhone?.type === "validate" && (
                                <styled.ErrorMessenge>Digite entre 9 a 12 caracteres</styled.ErrorMessenge>
                            )}
                        </styled.InputGroup>

                        <styled.InputGroup>
                            <p>Senha</p>
                            <input
                                {...Setters.register("password",
                                {required: true, validate: (value) => {
                                    return value.length >= 6 && value.length <= 20;
                                }})}
                                placeholder="Digite"
                                id="password"
                                type="password"
                            >
                            </input>
                            {States.errors.password?.type === "required" && (
                                <styled.ErrorMessenge>Campo obrigatório</styled.ErrorMessenge>
                            )}
                            {States.errors.password?.type === "validate" && (
                                <styled.ErrorMessenge>Digite entre 6 a 20 caracteres</styled.ErrorMessenge>
                            )}
                        </styled.InputGroup>

                        <styled.InputGroup>
                            <p>Confirmar senha</p>
                            <input
                                {...Setters.register("confirmPassword",
                                {required: true, validate: (value) => {
                                    return States.watch("password") === value;
                                }})}
                                placeholder="Digite"
                                id="confirmPassword"
                                type="password"
                            >
                            </input>
                            {States.errors.confirmPassword?.type === "required" && (
                                <styled.ErrorMessenge>Campo obrigatório</styled.ErrorMessenge>
                            )}
                            {States.errors.confirmPassword?.type === "validate" && (
                                <styled.ErrorMessenge>Senhas não coincidem</styled.ErrorMessenge>
                            )}
                        </styled.InputGroup>
                    </styled.GridContainer>

                    <styled.ConfirmButton
                        type="submit"
                        id="submit"
                    >
                        Cadastrar
                    </styled.ConfirmButton>
                </styled.EmailFormContainer>
            </styled.ContainerForm>
        </styled.Container>
    );
};

export default Register;