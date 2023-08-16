import React, { useEffect } from "react";
import SidebarTop from "./SidebarTop/SidebarTop";
import CartBar from "./CartBar/CartBar";
import SidebarLeft from "./SidebarLeft/SidebarLeft";
import { useAppSelector } from "@store/Store";
import { useDispatch } from "react-redux";
import { setOpenCartBar } from "@store/reducers/cartBar/cartBarSlice";
import { setOpenSideBar } from "@store/reducers/sideBar/sideBarSlice";

const Sidebar = () => {
    const { isOpenSideBar } = useAppSelector((state) => state.sideBar);
    const { isOpenCartBar } = useAppSelector((state) => state.cartBar);
    const dispatch = useDispatch();
    
    useEffect(() => {
        if(isOpenSideBar){
            dispatch(setOpenCartBar(false));
        };
    }, [isOpenSideBar]);

    useEffect(() => {
        if(isOpenCartBar){
          dispatch(setOpenSideBar(false));
        };
    }, [isOpenCartBar]);

    return(
        <React.Fragment>
            <SidebarTop />
            <SidebarLeft isOpen={isOpenSideBar} />
            <CartBar isOpen={isOpenCartBar} />
        </React.Fragment>
    );
};

export default Sidebar;