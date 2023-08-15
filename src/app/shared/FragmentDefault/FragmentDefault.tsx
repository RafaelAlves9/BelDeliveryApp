import * as Styled from "./FragmentDefault.styles";
import Sidebar from "@shared/Sidebar/Sidebar";
import { Fragment } from "react";
import { useAppSelector } from "@store/Store";

type Props = {
    children: React.ReactNode;
};

const FragmentDefault = ({ children }: Props) => {
    const { isOpenSideBar } = useAppSelector((state) => state.sideBar);

    return (
        <Fragment>
            <Sidebar isOpenSideBar={isOpenSideBar} />
            <Styled.ContentDefault isOpenSideBar={isOpenSideBar}>
                {children}
            </Styled.ContentDefault>
        </Fragment>
    );
};

export default FragmentDefault;