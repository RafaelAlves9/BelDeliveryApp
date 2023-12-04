import FragmentDefault from "@shared/FragmentDefault/FragmentDefault";
import * as Styles from "./Perfil.styles";
import { EPerfilOption } from "@enums/EPerfilOption";
import { BsBuildingGear, BsFillPersonLinesFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { setPerfilSection } from "@store/reducers/perfil/perfilSlice";
import { useAppSelector } from "@store/Store";
import Personal from "./Forms/Personal/Personal";
import Address from "./Forms/Address/Address";

const Perfil = () => {
    const { perfilSection } = useAppSelector(state => state.perfil);
    const { client } = useAppSelector((state) => state.clientData);
    const dispatch = useDispatch();

    const options = [
        {
            icon: <BsFillPersonLinesFill />,
            enum: EPerfilOption.Personal,
            name: EPerfilOption.Personal
        },
        {
            icon: <BsBuildingGear />,
            enum: EPerfilOption.Address,
            name: EPerfilOption.Address
        },
    ];

    const renderFormSection = () => {
        switch (perfilSection){
            case EPerfilOption.Personal:
                return <Personal />;
            case EPerfilOption.Address:
                return <Address />;
        };
    };

    return(
        <FragmentDefault>
            <Styles.Container>
                <Styles.NavBar>
                    <div>
                        <p>Meu Perfil</p>
                        <p>{client.userName}</p>
                    </div>
                    {options.map((option, index) => (
                        <div
                            key={index}
                            onClick={() => dispatch(setPerfilSection(option.enum))}
                            className={perfilSection === option.enum ? "active" : ""}
                        >
                            {option.icon}
                            <p>{option.name}</p>
                        </div>
                    ))}
                </Styles.NavBar>
                <Styles.Content>
                    {renderFormSection()}
                </Styles.Content>
            </Styles.Container>
        </FragmentDefault>
    );
};

export default Perfil;