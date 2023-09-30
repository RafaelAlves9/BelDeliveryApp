import styled from "styled-components";

export const Container = styled.main`
    margin: 1rem auto;
    width: 95%;
    max-width: 80rem;
    height: fit-content;
    
    >h1{
        margin-bottom: 1rem;
        font-size: 1.8rem;
        font-weight: 400;
    }
    >h2{
        font-size: 1.3rem;
        font-weight: 600;
    }
`
export const Content = styled.main`
    margin-top: 1rem;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    
    @media all and (min-width: 28rem) {
        grid-template-columns: 1fr 1fr;
    }

    @media all and (min-width: 35rem) {
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media all and (min-width: 54rem) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
`
export const Card = styled.div`
    width: 100%;
    height: 8rem;
    padding: 1rem;
    border-radius: .5rem;
    display: flex;
    gap: 1rem;
    cursor: pointer;
    transition: all .3s;

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
        box-shadow: 1px 2px 4px 3px #0000001a;
        transition: all .3s;
    }

    @media all and (min-width: 54rem) {
        
    }
`

