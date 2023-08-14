import React from "react";
import * as Styled from "./SidebarLeft.styled";

type props = {
    isOpen: boolean;
};

const SidebarLeft: React.FC<props> = ({ isOpen }) => {

    return(
        <React.Fragment>
            <Styled.Container isOpen={isOpen}>
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

export default SidebarLeft;