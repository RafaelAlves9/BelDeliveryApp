import styled from "styled-components";

export const ContentDefault = styled.div<{isOpenSideBar: boolean}>`
    margin-left: ${props => props.isOpenSideBar ? "17rem" : "6rem"};
    margin-top: 6rem;
    width: fit-content;
    height: fit-content;
    background-color: red;
`;
export const ButtonDefault = styled.button<{ color: "save" | "cancel" }>`
    padding: 0 1rem;
    min-width: 13rem;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.color === "save" ? "var(--green-main)" : "red"};
    color: ${(props) => props.color === "save" ? "#fff" : "#fff"};
    border-radius: 0.2rem;
    border: none;
    font-weight: 500;
    cursor: pointer;

    &:disabled{
        background-color: #bbbbbb;
    }
`;