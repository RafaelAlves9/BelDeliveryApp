import styled from "styled-components";

export const BgLoading = styled.div<{ isOpen: boolean }>`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    background-color: rgb(0,0,0,0.400);

    display: ${props => (props.isOpen ? 'flex' : 'none')};
    justify-content: center;
    align-items: center;
`;
export const Gif = styled.img`
    width: 10rem;
`;