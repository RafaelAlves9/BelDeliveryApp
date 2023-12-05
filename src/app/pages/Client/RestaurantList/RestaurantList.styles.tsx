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
export const Content = styled.section`
    margin-top: 1rem;
    width: 100%;
    display: flex;
    gap: 1.5rem;
`