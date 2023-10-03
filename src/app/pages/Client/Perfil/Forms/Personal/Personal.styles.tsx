import styled from "styled-components";

export const Container = styled.div`
    padding: 2rem;

    >h1{
        margin-bottom: 2rem;
    }

    @media all and (min-width: 54rem) {
        
    }
`
export const Form = styled.form`
    width: 100%;

    >div:first-of-type{
        width: 100%;
        display: grid;
        grid-template-columns: 1fr;
        gap: 2rem;
    }

    >div:last-of-type{
        margin: 2rem 0;
        width: 100%;
        display: flex;
        gap: 1rem;
    }

    @media all and (min-width: 54rem) {
        >div:first-of-type{
            grid-template-columns: 1fr 1fr 1fr;
        }
    }

`
export const InputGroup = styled.div`
    width: 100%;

    >label{
        >p{
            font-size: 1.1rem;
            color: gray;
        }
        >input{
            padding: .5rem;
            width: 100%;
            outline: none;
            border: none;
            border-bottom: 1px solid #bbbbbb;
            color: #000;
        }
        >input[type=date]{
            margin-top: 1rem;
        }
        >select{
            padding: 1rem;
            width: 100%;
            outline: none;
            border: none;
            border-bottom: 1px solid #bbbbbb;
            color: gray;
        }
        >.error{
            border-bottom: 1px solid red;
        }
    }
`;