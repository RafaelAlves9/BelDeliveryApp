import styled from "styled-components";

export const Container = styled.div`
    margin: 3rem auto;
    width: 95%;
    max-width: 80rem;
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media all and (min-width: 54rem) {
        flex-direction: row;
        justify-content: space-between;
    }
`
export const NavBar = styled.section`
    width: 100%;
    height: fit-content;
    box-shadow: 4px 4px 10px 5px #00000012;
    border-radius: .2rem;

    >div:not(:first-of-type){
        height: 4rem;
        border-top: 1px solid #bbbbbb5b;
        border-left: 7px solid transparent;
        display: flex;
        align-items: center;
        cursor: pointer;
        
        &.active{
            border-left: 7px solid var(--green-main);
        }

        >svg{
            margin: 0 1rem;
            font-size: 1.3rem;
            color: var(--green-main);
        }
        >p{
            margin: 0;
            color: var(--gray);
        }
    }
    >div:first-of-type{
        padding: 1.5rem;

        >p{
            color: #000;
            font-size: 1.4rem;
            font-weight: 500;
        }
        >p:first-of-type{
            color: #bbbbbb;
            font-size: 1rem;
            font-weight: 600;
        }
    }

    @media all and (min-width: 54rem) {
        max-width: 18rem;
        height: 33rem;
    }
`
export const Content = styled.section`
    width: 100%;
    min-height: 33rem;
    box-shadow: 4px 4px 10px 5px #00000012;
    border-radius: .2rem;

    @media all and (min-width: 54rem) {
        
    }
`