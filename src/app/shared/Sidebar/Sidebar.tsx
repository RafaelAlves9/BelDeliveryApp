import React from "react";
import SidebarLeft from "./SidebarLeft/SidebarLeft";
import SidebarTop from "./SidebarTop/SidebarTop";

type props = {
    isOpenSideBar: boolean;
};

const Sidebar: React.FC<props> = ({ isOpenSideBar }) => {

    return(
        <React.Fragment>
           <SidebarLeft
                isOpen={isOpenSideBar}
           />
           <SidebarTop
                isOpen={isOpenSideBar}
           />
        </React.Fragment>
    );
};

export default Sidebar;