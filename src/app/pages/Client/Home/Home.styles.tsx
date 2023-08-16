import styled from "styled-components";

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
