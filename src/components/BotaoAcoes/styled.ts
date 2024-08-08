import { CgMoreVerticalAlt } from "react-icons/cg";

import styled from "styled-components";
import variaveis from "../../styles/variaveis";
import { animOpacidade } from "../../styles";

export const BotaoOpcoes = styled(CgMoreVerticalAlt)`
  font-size: 24px;
  position: absolute;
  cursor: pointer;
`;

export const ListaDeOpcoes = styled.ul`
  background-color: ${variaveis.brancoFundo};
  border: 1px solid ${variaveis.cinza};
  border-radius: 8px;
  position: relative;
  top: 0px;
  right: 100px;
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;

export const Opcoes = styled.li`
  font-weight: 500;
  width: 100%;
  border-bottom: 1px solid ${variaveis.cinza};
  padding: 8px;
  cursor: pointer;
  svg {
    font-size: 12px;
    margin-right: 8px;
  }
  animation: ${animOpacidade} 0.3s forwards;
`;
