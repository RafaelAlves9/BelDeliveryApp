import styled from "styled-components";

export const ContentDefault = styled.div<{isOpenSideBar: boolean}>`
    margin-left: ${props => props.isOpenSideBar ? "17rem" : "6rem"};
    margin-top: 6rem;
    width: fit-content;
    height: fit-content;
    background-color: red;
`;