import * as styles from "./Home.styles";
//import UseHomeController from "./Home.controller";
import FragmentDefault from "@shared/FragmentDefault/FragmentDefault";

const Home = () => {
    //const { Actions } = UseHomeController();

    return(
        <FragmentDefault>
            <styles.SearchSectionHome>
                <h1>Olá <span>Rafael Alves</span>, seja bem-vindo!</h1>
                <input
                    type="text"
                    placeholder="Encontre seu novo restaurante favorito"
                />
            </styles.SearchSectionHome>
        </FragmentDefault>
    );
};

export default Home;