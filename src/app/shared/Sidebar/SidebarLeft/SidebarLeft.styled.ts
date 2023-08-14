import styled from "styled-components";

export const Container = styled.div<{isOpen: boolean}>`
    width: ${props => props.isOpen ? "15rem" : "5rem"};
    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    background-color: #000;
    z-index: 999;
`;