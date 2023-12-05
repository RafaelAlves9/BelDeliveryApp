import styled from "styled-components";

export const Card = styled.div`
    width: 95%;
    max-width: 20rem;
    height: 8rem;
    padding: 1rem;
    border-radius: .5rem;
    display: flex;
    gap: 1rem;
    cursor: pointer;
    transition: all .3s;
    border: 1px solid #00000017;
    background-color: #bbbbbb19;

    >div:first-of-type {
        width: 6rem;
        border: 1px solid #00000017;
        border-radius: 50%;
        overflow: hidden;

        >img{
            height: 100%;
            width: 100%;
        }
    }
    >div:last-of-type {
        display: flex;
        flex-direction: column;
        gap: .2rem;
        >p:nth-of-type(1){
            font-size: 1rem;
        }
        >p:nth-of-type(2){
            font-size: .9rem;
            color: gray;
        }
        >p:nth-of-type(3){
            font-size: .8rem;
        }
        >p:nth-of-type(4){
            font-size: .8rem;
            color: green;
        }
    }

    &:hover{
        scale: 1.05;
        z-index: 9;
        box-shadow: 5px 5px 10px #0000001a;
        transition: all .3s;
    }

    @media all and (min-width: 54rem) {
        
    }
`