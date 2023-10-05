import styled from "styled-components";

export const SearchSectionHome = styled.section`
    width: 100%;
    height: 25rem;
    background-color: var(--green-main);
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
            color: var(--orange);
            font-weight: 700;
        }
    }
    
    h2{
        font-size: 1.5rem;
        color: #fff;
        font-weight: 400;
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
        h2{
            font-size: 1.7rem;
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
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;

        >div{
            width: 30%;
            max-width: 11rem;
            cursor: pointer;
            overflow: hidden;

            img{
                width: 90%;
                height: 75%;
            }
            p{
                font-size: 1rem;
                color: #000;
                font-weight: 600;
            }

            @media all and (min-width: 54rem) {
                p{
                    font-size: 1.2rem;
                }
            }
        }
    }

`