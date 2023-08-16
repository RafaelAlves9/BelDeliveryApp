import styled from "styled-components";

export const BgBar = styled.div<{isOpen: boolean}>`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    background-color: rgb(0,0,0,0.400);
    z-index: 9;
    display: ${(props)=> props.isOpen ? "block" : "none"};
`;
export const Container = styled.div<{isOpen: boolean}>`
    width: ${(props) => props.isOpen ? "18rem" : "0"};;
    position: absolute;
    top: 4.1rem;
    bottom: 0;
    right: 0;
    background-color: #fff;
    border-left: 1px solid #bbbb;
    z-index: 999;
    animation: ease-in .3s;
    overflow: hidden;
`;