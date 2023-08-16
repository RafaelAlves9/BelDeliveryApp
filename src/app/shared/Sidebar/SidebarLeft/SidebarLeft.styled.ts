import styled from "styled-components";

export const BgBar = styled.div<{isOpen: boolean}>`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    background-color: rgb(0,0,0,0.400);
    z-index: 99;
    display: ${(props)=> props.isOpen ? "block" : "none"};
`;
export const ContainerBar = styled.div<{isOpen: boolean}>`
    width: 18rem;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => (props.isOpen ? '0' : '-250px')};
    background-color: #fff;
    border-right: 1px solid #bbbb;
    z-index: 999;
    transition: left ease-in-out 5s;
    overflow-x: hidden;

    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const Header = styled.div`
    width: 90%;
    height: 3.7rem;
    display: flex;
    justify-content: right;
    align-items: center;

    span{
        color: gray;
        font-size: 1.5rem;
        cursor: pointer;
        height: fit-content;
    }
`;
export const Line = styled.span`
    width: 100%;
    height: .05rem;
    background-color: #bbbbbb;
`;