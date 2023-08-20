import * as styles from "./Home.styles";
//import UseHomeController from "./Home.controller";
import FragmentDefault from "@shared/FragmentDefault/FragmentDefault";
import Image from "@assets/pizza-logo.jpg";

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
            <styles.CategorySection>
                <h2>Selecione por categoria</h2>
                <div>
                    <div>
                        <img src={Image} alt="" />
                        <p>Lanchonete</p>
                    </div>
                    <div>
                        <img src={Image} alt="" />
                        <p>Pizzaria</p>
                    </div>
                    <div>
                        <img src={Image} alt="" />
                        <p>Hamburgueria</p>
                    </div>
                    <div>
                        <img src={Image} alt="" />
                        <p>Hamburgueria</p>
                    </div>
                    <div>
                        <img src={Image} alt="" />
                        <p>Hamburgueria</p>
                    </div>
                </div>
            </styles.CategorySection>
        </FragmentDefault>
    );
};

export default Home;