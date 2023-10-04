import * as Styles from "./Address.styles";
import ErrorMessenge from "@shared/ErrorMessenge/ErrorMessenge";
import UseAddressController from "./Address.controller";
import { validation } from "@utils/ValitationSchema";
import { ButtonDefault } from "@src/App.styled";

const Address = () => {
    const { States, Setters, Actions } = UseAddressController();
    
    return(
        <Styles.Container>
            <h1>Dados Pessoais</h1>
            <Styles.Form onSubmit={Actions.handleSubmit(Actions.onSubmit)}>
                <div className="content">
                    <Styles.InputGroup>
                        <label htmlFor="">
                            <p>CEP</p>
                            <input
                                type="text"
                                {...Setters.register("cep", {validate: (e) => {
                                    return validation.text(e).isValide;
                                }})}
                                className={States.errors.cep?.type === "validate" ? "error" : ""}
                            />
                        </label>
                        <ErrorMessenge
                            validate={validation.text(States.watch("cep"))}
                            validateStatus={States.errors.cep?.type === "validate"}
                        />
                    </Styles.InputGroup>
                    
                    <Styles.InputGroup>
                        <label htmlFor="">
                            <p>Rua</p>
                            <input
                                type="text"
                                {...Setters.register("streeth", {validate: (e) => {
                                    return validation.text(e).isValide;
                                }})}
                                className={States.errors.streeth?.type === "validate" ? "error" : ""}
                            />
                        </label>
                        <ErrorMessenge
                            validate={validation.text(States.watch("streeth"))}
                            validateStatus={States.errors.streeth?.type === "validate"}
                        />
                    </Styles.InputGroup>
                    
                    <Styles.InputGroup>
                        <label htmlFor="">
                            <p>Número</p>
                            <input
                                type="text"
                                {...Setters.register("number", {required: true})}
                                className={States.errors.number?.type === "required" ? "error" : ""}
                            />
                        </label>
                        <ErrorMessenge
                            validateStatus={States.errors.number?.type === "required"}
                        />
                    </Styles.InputGroup>
                    
                    <Styles.InputGroup>
                        <label htmlFor="">
                            <p>Cidade</p>
                            <input
                                type="text"
                                {...Setters.register("city", {validate: (e) => {
                                    return validation.text(e).isValide;
                                }})}
                                {...{maxLength: 6}}
                                className={States.errors.city?.type === "validate" ? "error" : ""}
                            />
                        </label>
                        <ErrorMessenge
                            validate={validation.text(States.watch("city"))}
                            validateStatus={States.errors.city?.type === "validate"}
                        />
                    </Styles.InputGroup>
                    
                    <Styles.InputGroup>
                        <label htmlFor="">
                            <p>Estado</p>
                            <input
                                type="text"
                                {...Setters.register("state", {validate: (e) => {
                                    return validation.text(e).isValide;
                                }})}
                                className={States.errors.state?.type === "validate" ? "error" : ""}
                            />
                        </label>
                        <ErrorMessenge
                            validate={validation.text(States.watch("state"))}
                            validateStatus={States.errors.state?.type === "validate"}
                        />
                    </Styles.InputGroup>
                    
                    <Styles.InputGroup>
                        <label htmlFor="">
                            <p>Complemento</p>
                            <input
                                type="text"
                                {...Setters.register("complement", {validate: (e) => {
                                    return validation.text(e, false, 0, 100).isValide;
                                }})}
                                className={States.errors.complement?.type === "validate" ? "error" : ""}
                            />
                        </label>
                        <ErrorMessenge
                            validate={validation.text(States.watch("complement"), false, 3, 100)}
                            validateStatus={States.errors.complement?.type === "validate"}
                        />
                    </Styles.InputGroup>
                </div>
                <div className="button_container">
                    <ButtonDefault color="save">
                        Salvar Alterações
                    </ButtonDefault>
                </div>
            </Styles.Form>
        </Styles.Container>
    );
};

export default Address;