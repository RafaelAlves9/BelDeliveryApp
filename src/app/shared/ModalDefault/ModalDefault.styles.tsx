import styled from "styled-components";

export const BgOrderModal = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    background-color: #00000032;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99;

    @media all and (min-width: 54rem) {
    }
`
export const CardModal = styled.main`
    padding: .5rem 1.5rem 1rem 1.5rem;
    width: fit-content;
    height: fit-content;
    background-color: #fff;
    border-radius: 0.2rem;

    >div:nth-of-type(1){
        width: 1.5rem;
        height: 1.5rem;
        position: relative;
        top: -1rem;
        left: 101%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1rem;
        font-weight: 700;
        color: #fff;
        background-color: red;
        border-radius: 50%;
        cursor: pointer;
    }
    >div:nth-of-type(2){
        width: fit-content;
        height: fit-content;
    }
`
