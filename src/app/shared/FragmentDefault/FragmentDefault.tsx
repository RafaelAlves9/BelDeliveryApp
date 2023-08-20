import Footer from "@shared/Footer/Footer";
import * as Styled from "./FragmentDefault.styles";
import Sidebar from "@shared/Sidebar/Sidebar";
import { Fragment } from "react";

type Props = {
    children: React.ReactNode;
};

const FragmentDefault = ({ children }: Props) => {

    return (
        <Fragment>
            <Sidebar />
            <Styled.ContentDefault>
                {children}
            </Styled.ContentDefault>
            <Footer />
        </Fragment>
    );
};

export default FragmentDefault;