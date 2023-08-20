import styled from "styled-components";

export const SearchSectionHome = styled.section`
    width: 100%;
    height: 30rem;
    background-color: var(--orange);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    h1{
        font-size: 2.5rem;
        color: #fff;

        span{
            font-weight: 700;
            color: #000;
        }
    }

    input{
        margin-top: 2.5rem;
        padding: 1.3rem;
        width: 80%;
        max-width: 37rem;
        border: none;
        outline: none;
        border-radius: .15rem;
        font-size: 1rem;
    }

    @media all and (min-width: 54rem) {
        h1{
            font-size: 3.5rem;
        }
        input{
            font-size: 1.3rem;
        }
    }
`
export const CategorySection = styled.section`
    margin: 0 auto 2rem auto;
    width: 95%;
    
    >h2{
        padding: 2rem 0;
        font-size: 1.5rem;
        text-align: left;
    }
    >div{
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;

        >div{
            width: 30%;
            max-width: 10rem;
            cursor: pointer;
            overflow: hidden;

            img{
                width: 100%;
            }
            p{
                font-size: 1.1rem;
                color: #000;
                font-weight: 600;
            }
        }
    }

`