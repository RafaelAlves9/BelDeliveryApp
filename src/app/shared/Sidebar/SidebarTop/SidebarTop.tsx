import * as Styled from "./SidebarTop.styled";
import { IoIosMenu } from "react-icons/io";
import { ImCart } from "react-icons/im";
import Logo from "@assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setOpenSideBar } from "@store/reducers/sideBar/sideBarSlice";
import { setOpenCartBar } from "@store/reducers/cartBar/cartBarSlice";
import { useAppSelector } from "@store/Store";

const SidebarTop = () => {
    const { isOpenCartBar } = useAppSelector((state) => state.cartBar);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return(
        <Styled.Container>
            <Styled.Contente>
                <div>
                    <span>
                        <IoIosMenu
                            onClick={() => dispatch(setOpenSideBar(true))}
                        />
                    </span>
                    <img
                        src={Logo}
                        alt=""
                        onClick={() => navigate("/")}
                    />
                </div>
                <input type="text" />
                <div>
                    <ImCart
                        onClick={() => dispatch(setOpenCartBar(!isOpenCartBar))}
                    />
                </div>
            </Styled.Contente>
        </Styled.Container>
    );
};

export default SidebarTop;
