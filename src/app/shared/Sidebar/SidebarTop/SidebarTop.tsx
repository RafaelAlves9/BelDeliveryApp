import React from "react";
import * as Styled from "./SidebarTop.styled";

type props = {
    isOpen: boolean;
};

const SidebarTop: React.FC<props> = ({ isOpen }) => {

    return(
        <React.Fragment>
            <Styled.Container>
                {isOpen ? (
                    <div>
                        <p>asdasdasd</p>
                    </div>
                ): (
                    <div>
                        <p>asdasdasd</p>
                    </div>
                )}
            </Styled.Container>
        </React.Fragment>
    );
};

export default SidebarTop;