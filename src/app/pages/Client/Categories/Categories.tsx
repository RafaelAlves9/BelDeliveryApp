import FragmentDefault from "@shared/FragmentDefault/FragmentDefault";
import * as Styles from "./Categories.styles";
import { useNavigate, useParams } from "react-router-dom";
import Img from "@assets/pizza-logo.jpg"

const Categories = () => {
    const { category } = useParams();
    const navigate = useNavigate();

    const toUpperCaseFirstWord = (name?: string) => {
        if(!!name) return name.charAt(0).toUpperCase() + name.slice(1);
    };

    return(
        <FragmentDefault>
            <Styles.Container>
                <h1>Categoria {toUpperCaseFirstWord(category)}</h1>
                <h2>Lista de Restaurantes</h2>
                
                <Styles.Content>
                    <Styles.Card onClick={() => navigate(`/loja/nome-loja`)}>
                        <div>
                            <img src={Img} alt="" />
                        </div>
                        <div>
                            <p>Petshop Iguassu</p>
                            <p>Mercado</p>
                            <p>40-50 min</p>
                            <p>R$ 14,99</p>
                        </div>
                    </Styles.Card>
                    <Styles.Card>
                        <div>
                            <img src={Img} alt="" />
                        </div>
                        <div>
                            <p>Petshop Iguassu</p>
                            <p>Mercado</p>
                            <p>40-50 min</p>
                            <p>R$ 14,99</p>
                        </div>
                    </Styles.Card>
                    <Styles.Card>
                        <div>
                            <img src={Img} alt="" />
                        </div>
                        <div>
                            <p>Petshop Iguassu</p>
                            <p>Mercado</p>
                            <p>40-50 min</p>
                            <p>R$ 14,99</p>
                        </div>
                    </Styles.Card>
                    <Styles.Card>
                        <div>
                            <img src={Img} alt="" />
                        </div>
                        <div>
                            <p>Petshop Iguassu</p>
                            <p>Mercado</p>
                            <p>40-50 min</p>
                            <p>R$ 14,99</p>
                        </div>
                    </Styles.Card>
                    <Styles.Card>
                        <div>
                            <img src={Img} alt="" />
                        </div>
                        <div>
                            <p>Petshop Iguassu</p>
                            <p>Mercado</p>
                            <p>40-50 min</p>
                            <p>R$ 14,99</p>
                        </div>
                    </Styles.Card>
                </Styles.Content>

            </Styles.Container>
        </FragmentDefault>
    );
};

export default Categories;