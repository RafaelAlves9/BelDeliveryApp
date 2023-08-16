import { useDispatch } from "react-redux";
import * as Styled from "./SidebarLeft.styled";
import { AiFillCloseCircle } from "react-icons/ai";
import { setOpenSideBar } from "@store/reducers/sideBar/sideBarSlice";

type props = {
    isOpen: boolean;
};

const SidebarLeft = ({ isOpen }: props) => {
    const dispatch = useDispatch();

    return(
        <Styled.BgBar isOpen={isOpen}>
            <Styled.ContainerBar isOpen={isOpen}>
                <Styled.Header>
                    
                    <span onClick={() => dispatch(setOpenSideBar(false))}>
                        <AiFillCloseCircle />
                    </span>
                </Styled.Header>
                <Styled.Line />
            </Styled.ContainerBar>
        </Styled.BgBar>
    );
};

export default SidebarLeft;