import styled from "styled-components";

export const FooterContainer = styled.footer`
    margin: 0 auto;
    width: 95%;
    height: 6rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    >p{
        font-size: .9rem;
        font-weight: 500;
        color: #000;
    }
    >div{
        display: flex;
        gap: 1rem;
        
        >a{
            width: fit-content;

            svg{
                color: #000;
                font-size: 1.5rem;
                cursor: pointer;
            }
        }
    }
`