import { useDispatch } from "react-redux";
import * as Styled from "./SidebarLeft.styled";
import { AiFillCloseCircle } from "react-icons/ai";
import { setOpenSideBar } from "@store/reducers/sideBar/sideBarSlice";
import Logo from "@assets/logo.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type props = {
    isOpen: boolean;
};

const SidebarLeft = ({ isOpen }: props) => {
    const [route, setRoute] = useState<string>("home");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const param = window.location.href;

    const ItemList = ["home", "perfil", "pedidos", "restaurantes"];

    const getCurrentParamRoute = () => {
        const segments = param.split('/');
        const lastParam = segments[segments.length - 1];

        if(lastParam.length > 0){
            setRoute(lastParam);
        } else setRoute("home");
    };

    useEffect(() => {
        getCurrentParamRoute();
    }, [param]);

    return(
        <Styled.BgBar isOpen={isOpen}>
            <Styled.ContainerBar isOpen={isOpen}>
                <Styled.Header>
                    <img src={Logo} alt="" />
                    <span onClick={() => dispatch(setOpenSideBar(false))}>
                        <AiFillCloseCircle />
                    </span>
                </Styled.Header>
                <Styled.Line />

                <p>MEU MENU</p>
                
                <Styled.ItemContainer>
                    {ItemList.map((item, index) => (
                        <Styled.Item
                            key={index}
                            onClick={() => {
                                dispatch(setOpenSideBar(false));
                                navigate(`/${item}`);
                            }}
                            isActive={route === item}
                        >
                            {item.toLocaleUpperCase()}
                        </Styled.Item>
                    ))}
                </Styled.ItemContainer>
            </Styled.ContainerBar>
        </Styled.BgBar>
    );
};

export default SidebarLeft;