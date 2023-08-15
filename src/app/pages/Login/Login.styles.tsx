import styled from "styled-components";
import LogoPizza from "@assets/pizza-logo.jpg";
import LogoPizzaDark from "@assets/pizza-logo-dark.jpg";

export const Container = styled.div`
   width: 100%;
   height: 100vh;
   display: grid;
   grid-template-columns: 1fr 1.5fr;
   grid-template-rows: 1fr;
   grid-template-areas: "logo form";
   
    @media screen and (max-width: 54rem) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        grid-template-areas: "form";
    };
`;
export const ContainerLogo = styled.div`
    grid-area: logo;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-image: url(${LogoPizza});
    background-position: left;
    background-size: cover;

    @media screen and (max-width: 54rem) {
        display: none;
    };
`;
export const ContainerForm = styled.div`
    grid-area: form;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    @media screen and (max-width: 54rem) {
        background-image: url(${LogoPizzaDark});
        background-size: cover;
        background-position: bottom;
        background-color: #000;
    };
`;
export const Tittle = styled.h1`
    font-size: 2rem;
    font-family: 'Nunito', sans-serif;
    font-weight: 800;
    
    @media screen and (max-width: 54rem) {
        font-size: 1.6rem;
        color: #fff;
    };
`;
export const ButtonsActionsContainer = styled.div`
    padding-top: 3rem;
`;
export const ButtonAction = styled.button<{number: number}>`
    margin-bottom: 1rem;
    width: 20rem;
    height: 3rem;
    border-radius: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: 1px solid var(--green-main);
    border: none;
    font-family: 'Nunito', sans-serif;
    color: var(--green-main);
    font-size: 1rem;
    font-weight: 800;
    cursor: pointer;
    gap: 1rem;
    background-color: #fff;

    &:nth-of-type(1){
        background-color: var(--green-main);
        outline: 1px solid var(--green-main);
        color: #fff;
    }
    &:nth-of-type(1):hover{
        background-color: var(--green-disable);
    }
    &:hover{
        background-color: #29d88322;
    }
    img{
        width: 2.2rem;
    }
    
    @media screen and (max-width: 54rem) {
        background-color: transparent;
    };
`;
export const EmailIcon = styled.div`
    padding-top: 0.7rem;
    font-size: 2.4rem;
    color: var(--green-main);
`;

export const EmailFormContainer = styled.form`
    width: 35rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media screen and (max-width: 54rem) {
        width: 85%;
    };
`;
export const BackStep = styled.div`
    margin-bottom: 1rem;
    width: 100%;
    text-align: left;
    font-size: 2rem;
    color: #000;
    font-weight: 700;
    display: flex;
    align-items: center;
    cursor: pointer;

    p{
        font-size: 1rem;
    }
    
    @media screen and (max-width: 54rem) {
        position: fixed;
        top: 1rem;
        left: .5rem;
        color: #fff;
    };
`;
export const Input = styled.input`
    width: 85%;
    padding: .8rem;
    outline: none;
    border: none;
    background-color: #F7F8F9;
    border-bottom: 1px solid #bbbbbb6b;
    
    &:nth-of-type(1){
        margin-top: 2.5em;
    }
    &:not(:nth-of-type(1)){
        margin-top: 1rem;
    }
    
    &:focus{
        border-bottom: 1px solid var(--green-main);
    }
    
    @media screen and (max-width: 54rem) {
        width: 100%;
    };
`;
export const ErrorMessenge = styled.span`
    padding-top: 0.3rem;
    width: 85%;
    text-align: left;
    color: #ff0000db;
    font-size: .8rem;
    font-weight: 700;
    
    @media screen and (max-width: 54rem) {
        width: 100%;
        color: #ff0000db;
    };
`
export const ConfirmButton = styled.button`
    margin-top: 2rem;
    border-radius: 2rem;
    width: 20rem;
    height: 3.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: var(--green-main);
    color: #fff;
    font-weight: 800;
    font-size: 1rem;
    cursor: pointer;

    &:hover{
        background-color: var(--green-disable);
    }

    &:disabled{
        background-color: #e6ebf1;
        color: #aaaeb3
    }
`;