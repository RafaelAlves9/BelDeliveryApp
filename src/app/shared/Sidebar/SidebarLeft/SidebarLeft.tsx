import { useDispatch } from "react-redux";
import * as Styled from "./SidebarLeft.styled";
import { AiFillCloseCircle } from "react-icons/ai";
import { setOpenSideBar } from "@store/reducers/sideBar/sideBarSlice";
import Logo from "@assets/logo.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GrLogout } from "react-icons/gr";
import React from "react";
import { useAppSelector } from "@store/Store";

type props = {
    isOpen: boolean;
};

const SidebarLeft = ({ isOpen }: props) => {
    const [route, setRoute] = useState<string>("home");
    const { client } = useAppSelector((state) => state.clientData);
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

    const logoutMethod = (): void => {
        localStorage.removeItem("logged");
        dispatch(setOpenSideBar(false));
        navigate("/login");
    };

    useEffect(() => {
        getCurrentParamRoute();
    }, [param]);

    return(
        <React.Fragment>
            <Styled.ContainerBar isOpen={isOpen}>
                <div>
                    <Styled.Header>
                        <img src={Logo} alt="" />
                        <span onClick={() => dispatch(setOpenSideBar(false))}>
                            <AiFillCloseCircle />
                        </span>
                    </Styled.Header>
                    <Styled.Line />
                    <hr />

                    <Styled.NameContainer>
                        <p>
                            Olá, <span>{client.userName}</span>!
                        </p>
                    </Styled.NameContainer>
                    <hr />

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
                </div>
                <div>
                    <Styled.Logout onClick={() => logoutMethod()}>
                        <GrLogout />
                        Logout
                    </Styled.Logout>
                </div>
            </Styled.ContainerBar>
            <Styled.BgBar
                isOpen={isOpen}
                onClick={() => dispatch(setOpenSideBar(false))}
            />
        </React.Fragment>
    );
};

export default SidebarLeft;