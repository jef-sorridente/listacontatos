import styled, { createGlobalStyle, keyframes } from "styled-components";
import variaveis from "./variaveis";

const EstiloGlobal = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Inter Tight", sans-serif;
        list-style: none;
    }

    body{
        background-color: ${variaveis.azulFundo};
    }
`;

export const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 16px auto;
  padding: 16px;
  border-radius: 8px;
  background-color: ${variaveis.brancoFundo};
`;

export const animOpacidade = keyframes`
    from{
      opacity: 0;
     
    }
    to{
      opacity: 100%;
     
    }
 `;

export default EstiloGlobal;
