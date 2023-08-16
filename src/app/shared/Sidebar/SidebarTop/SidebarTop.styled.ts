import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 4rem;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    background-color: #fff;
    border-bottom: 1px solid #bbbb;
    z-index: 99;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Contente = styled.div`
    width: 96%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;

    div:nth-of-type(1){
        grid-area: menuIcon;
        color: var(--gray);
        display: flex;
        align-items: center;
        gap: 2rem;

        span{
            margin-top: 1rem;
            font-size: 2.4rem;
            cursor: pointer;
        }
        img{
            width: 5.2rem;
            height: 100%;
            cursor: pointer;
        }
    }
    input{
        grid-area: inputSearch;
        width: 80%;
        max-width: 40rem;
        
        @media screen and (max-width: 54rem) {
            display: none;
        };
    }
    div:last-of-type{
        grid-area: cartIcon;
        font-size: 1.8rem;
        padding-top: 0.5rem;
        cursor: pointer;
        color: var(--gray);

        &:hover{
            color: #bbbbbb;
        }
    }

    @media screen and (max-width: 54rem) {
        width: 90%;
    };
`;