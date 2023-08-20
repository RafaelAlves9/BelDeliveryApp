import * as styles from "./Home.styles";
//import UseHomeController from "./Home.controller";
import FragmentDefault from "@shared/FragmentDefault/FragmentDefault";
import Image from "@assets/pizza-logo.jpg";
import { useNavigate } from "react-router-dom";

interface Category {
    img: string;
    title: string;
    route: string;
}

const Home = () => {
    //const { Actions } = UseHomeController();
    const navigate = useNavigate();

    const categoryList: Category[] = [
        {
            img: Image,
            title: "Lanchonete",
            route: "lanchonete"
        },
        {
            img: Image,
            title: "Pizzaria",
            route: "pizzaria"
        },
        {
            img: Image,
            title: "Hamburgueria",
            route: "hamburgueria"
        }
    ];

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
                    {categoryList.map((category, index) => (
                        <div
                            key={index}
                            onClick={() => navigate(`/categorias/${category.route}`)}
                        >
                            <img src={category.img} alt="" />
                            <p>{category.title}</p>
                        </div>
                    ))}
                </div>
            </styles.CategorySection>
        </FragmentDefault>
    );
};

export default Home;