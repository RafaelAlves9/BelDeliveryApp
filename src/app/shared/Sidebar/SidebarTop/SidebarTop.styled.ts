import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 4rem;
    position: fixed;
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

        svg{
            margin-top: .5rem;
            font-size: 1.8rem;
            cursor: pointer;
        }
        img{
            width: 4.2rem;
            height: 100%;
            cursor: pointer;
        }
    }
    input{
        grid-area: inputSearch;
        width: 70%;
        max-width: 40rem;
        border: none;
        outline: none;
        padding: 1rem;
        background-color: rgb(0,0,0,0.030);
        border-radius: .3rem;
        font-size: .9rem;
        color: gray;

        &:focus{
            border: 1px solid #bbb;
        }
        
        @media screen and (max-width: 54rem) {
            display: none;
        };
    }
    div:last-of-type{
        display: flex;
        align-items: center;
        gap: .7rem;

        >svg{
            grid-area: cartIcon;
            font-size: 2rem;
            padding-top: 0.5rem;
            cursor: pointer;
            color: var(--gray);

            &:hover{
                color: #bbbbbb;
            }
        }
        >p{
            margin-top: .5rem;
            font-size: .9rem;
            color: var(--gray);
        }
    }

    @media screen and (max-width: 54rem) {
        width: 90%;
    };
`;