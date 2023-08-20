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
