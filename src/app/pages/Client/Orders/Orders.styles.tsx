import styled from "styled-components";

export const OrdersContainer = styled.main`
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
export const ContentOrders = styled.main`
    margin-top: 1rem;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;

    @media all and (min-width: 40rem) {
        grid-template-columns: 1fr 1fr;
    }

    @media all and (min-width: 54rem) {
        grid-template-columns: 1fr 1fr 1fr;
    }
`
export const OrderCard = styled.div`
    padding: 1rem;
    border: 1px solid #00000017;
    border-radius: .2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    >div:nth-of-type(1){
        display: flex;
        gap: 1rem;

        >div:first-of-type{
            overflow: hidden;
            width: 3rem;
            height: 3rem;
            border-radius: 50%;
            background-color: aliceblue;
        }
        >div:first-of-type > img{
            width: 100%;
        }
        >div:last-of-type >p:first-of-type{
            font-size: 1.2rem;
        }
        >div:last-of-type >p:last-of-type{
            font-size: .9rem;
            color: gray;
        }
    }
    >div:nth-of-type(2){
        >p{
            font-size: 1rem;
            color: gray;

            >span{
                padding: .2rem .4rem;
                font-size: .8rem;
                background-color: #bbb;
                color: #fff;
                border-radius: .2rem;
            }
        }
    }
    >div:nth-of-type(3){
        display: flex;
        justify-content: center;
        gap: 30%;

        >p{
            text-align: center;
            width: fit-content;
            font-weight: 700;
            cursor: pointer;
            color: var(--orange);
        }
    }

    @media all and (min-width: 54rem) {
        
    }
`

