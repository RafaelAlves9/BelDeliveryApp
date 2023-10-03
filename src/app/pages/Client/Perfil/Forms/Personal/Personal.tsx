import * as Styles from "./Personal.styles";
import ErrorMessenge from "@shared/ErrorMessenge/ErrorMessenge";
import UsePersonalController from "./Personal.controller";
import { validation } from "@utils/ValitationSchema";
import { EGender } from "@enums/EGender";
import { ButtonDefault } from "@src/App.styled";

const Personal = () => {
    const { States, Setters, Actions } = UsePersonalController();
    console.log("States", States.errors.name?.type === "validate")
    return(
        <Styles.Container>
            <h1>Dados Pessoais</h1>
            <Styles.Form onSubmit={Actions.handleSubmit(Actions.onSubmit)}>
                <div className="content">
                    <Styles.InputGroup>
                        <label htmlFor="">
                            <p>Nome Completo</p>
                            <input
                                type="text"
                                {...Setters.register("name", {validate: (e) => {
                                    return validation.text(e).isValide;
                                }})}
                                className={States.errors.name?.type === "validate" ? "error" : ""}
                            />
                        </label>
                        <ErrorMessenge
                            validate={validation.text(States.watch("name"))}
                            validateStatus={States.errors.name?.type === "validate"}
                        />
                    </Styles.InputGroup>
                    
                    <Styles.InputGroup>
                        <label htmlFor="">
                            <p>E-mail</p>
                            <input
                                type="text"
                                {...Setters.register("email", {validate: (e) => {
                                    return validation.email(e).isValide;
                                }})}
                                className={States.errors.email?.type === "validate" ? "error" : ""}
                                disabled
                            />
                        </label>
                        <ErrorMessenge
                            validate={validation.email(States.watch("email"))}
                            validateStatus={States.errors.email?.type === "validate"}
                        />
                    </Styles.InputGroup>
                    
                    <Styles.InputGroup>
                        <label htmlFor="">
                            <p>Celular</p>
                            <input
                                type="text"
                                {...Setters.register("cellPhone", {validate: (e) => {
                                    return validation.text(e, true, 9, 11).isValide;
                                }})}
                                {...{maxLength: 11}}
                                className={States.errors.cellPhone?.type === "validate" ? "error" : ""}
                            />
                        </label>
                        <ErrorMessenge
                            validate={validation.text(States.watch("cellPhone"), true, 9, 11)}
                            validateStatus={States.errors.cellPhone?.type === "validate"}
                        />
                    </Styles.InputGroup>
                    
                    <Styles.InputGroup>
                        <label htmlFor="">
                            <p>Masculino</p>
                            <select
                                {...Setters.register("gender")}
                            >
                                <option value="" disabled>Selecionar</option>
                                <option value={EGender.male}>Masculino</option>
                                <option value={EGender.female}>Feminino</option>
                                <option value={EGender.undefined}>Não definido</option>
                            </select>
                        </label>
                    </Styles.InputGroup>
                    
                    <Styles.InputGroup>
                        <label htmlFor="">
                            <p>Data de nascimento</p>
                            <input
                                type="date"
                                {...Setters.register("dateOfBirth")}
                            />
                        </label>
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

export default Personal;