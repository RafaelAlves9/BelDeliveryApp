import * as styles from "./Home.styles";
import UseHomeController from "./Home.controller";
import FragmentDefault from "@shared/FragmentDefault/FragmentDefault";
import { useNavigate } from "react-router-dom";
import Lanch from "@assets/lanchonete-category.png";
import Pizzaria from "@assets/pizza-category.webp";
import Hamb from "@assets/hamburguer-category.png";

interface Category {
    img: string;
    title: string;
    route: string;
}

const Home = () => {
    const { States } = UseHomeController();
    const navigate = useNavigate();

    const categoryList: Category[] = [
        {
            img: Lanch,
            title: "Lanchonete",
            route: "lanchonete"
        },
        {
            img: Pizzaria,
            title: "Pizzaria",
            route: "pizzaria"
        },
        {
            img: Hamb,
            title: "Hamburgueria",
            route: "hamburgueria"
        }
    ];

    return(
        <FragmentDefault>
            <styles.SearchSectionHome>
                <h1>Olá <span>{States.client.userName}</span>, seja bem-vindo!</h1>
                <h2>Navegue e descubra seu novo restaurante favorito!</h2>
            </styles.SearchSectionHome>
            <styles.CategorySection>
                <h2>Navegue por categoria</h2>
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