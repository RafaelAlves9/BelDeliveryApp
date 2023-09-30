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
    height: 33rem;
    box-shadow: 4px 4px 10px 5px #00000012;
    border-radius: .2rem;

    @media all and (min-width: 54rem) {
        max-width: 18rem;
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