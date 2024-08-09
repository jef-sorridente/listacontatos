import styled from "styled-components";
import variaveis from "../../styles/variaveis";
import { animOpacidade } from "../../styles";

export const MensagemStyled = styled.div`
  position: fixed;
  bottom: 64px;
  right: 64px;
  padding: 16px;
  border-radius: 16px;
  font-weight: 500;
  border: 1px solid ${variaveis.cinza};
  background-color: ${variaveis.brancoFundo};
  animation: ${animOpacidade} 0.5s forwards;
`;
