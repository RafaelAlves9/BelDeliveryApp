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
        position: fixed;
        top: 0;
        bottom: 0;
        z-index: 9;
        background-image: url(${LogoPizzaDark});
        background-size: cover;
        background-position: bottom;
    };
`;
export const ContainerForm = styled.div`
    width: 100%;
    grid-area: form;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 99;
    
    @media screen and (max-width: 54rem) {
        background-color: rgb(0,0,0,0.4);
    };
`;
export const Tittle = styled.h1`
    font-size: 2rem;
    font-family: 'Nunito', sans-serif;
    font-weight: 800;
    
    @media screen and (max-width: 54rem) {
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
export const EmailFormContainer = styled.form`
    width: 100%;
    max-width: 35rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    @media screen and (max-width: 54rem) {
        width: 85%;
    };
`;
export const GridContainer = styled.div`
    width: 80%;
    margin-top: 1.5rem;
    margin-right: 1.5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto 1fr;
    grid-template-areas:
    "name name"
    "email email"
    "cel cel"
    "password password2";
    gap: .7rem 2.5rem;
`
export const InputGroup = styled.label`
    width: 100%;
    height: fit-content;
    text-align: left;

    >p{
        color: #fff;
        font-weight: 500;
    
        @media screen and (min-width: 54rem) {
            color: #000;
        };
    }
    >input{
        width: 100%;
        padding: .8rem;
        outline: none;
        border: none;
        background-color: #F7F8F9;
        border-bottom: 3px solid transparent;
        
        &:focus{
            border-bottom: 3px solid var(--green-main);
        }
    }
    
    &:nth-of-type(1){
        grid-area: name;
    }
    &:nth-of-type(2){
        grid-area: email;
    }
    &:nth-of-type(3){
        grid-area: cel;
    }
    &:nth-of-type(4){
        grid-area: password;
    }
    &:nth-of-type(5){
        grid-area: password2;
    }
`
export const ErrorMessenge = styled.span`
    width: 90%;
    text-align: left;
    color: #ff0000db;
    font-size: .8rem;
    font-weight: 700;
    text-align: left;
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