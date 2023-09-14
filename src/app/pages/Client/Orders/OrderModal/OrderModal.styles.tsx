import styled from "styled-components";

export const BgOrderModal = styled.div<{ isOpen: boolean }>`
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    background-color: #00000032;
    display: ${props => (props.isOpen ? 'flex' : 'none')};
    justify-content: center;
    align-items: center;
    z-index: 99;

    @media all and (min-width: 54rem) {
        
    }
`
export const CardModal = styled.main`
    width: 95%;
    max-width: 32rem;
    height: 95%;
    max-height: 40rem;
    background-color: #fff;
    border-radius: 0.2rem;
    display: flex;
    justify-content: center;
    align-items: center;

    >div{
        height: 90%;
        width: 90%;
        background-color: #000;

        >div{
            width: 1.5rem;
            height: 1.5rem;
            position: relative;
            top: -2.2rem;
            left: 101%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.3rem;
            font-weight: 700;
            color: #fff;
            background-color: red;
            border-radius: 50%;
            cursor: pointer;
        }
    }
`