import * as Styled from "./CartBar.styled";

type props = {
    isOpen: boolean;
};

const CartBar = ({ isOpen }: props) => {
    
    return(
        <Styled.BgBar isOpen={isOpen}>
            <Styled.Container isOpen={isOpen}>
                assssssssssss
            </Styled.Container>
        </Styled.BgBar>
    );
};

export default CartBar;