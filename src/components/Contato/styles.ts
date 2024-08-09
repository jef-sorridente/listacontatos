import { CgMoreVerticalAlt } from "react-icons/cg";

import styled from "styled-components";
import variaveis from "../../styles/variaveis";
import { animOpacidade } from "../../styles";

export const ListaPadrao = styled.li`
  display: grid;
  grid-template-columns: repeat(3, 30%) 5%;
  justify-content: space-between;
  padding: 16px;
  text-align: start;
`;

export const ListaCorpo = styled(ListaPadrao)`
  font-size: 14px;
  border-top: 1px solid ${variaveis.brancoFundo};
  height: 60px;
  position: relative;
`;

export const Input = styled.textarea`
  resize: none;
  border: none;
  background-color: transparent;
  height: 25px;
`;

export const BotaoOpcoes = styled(CgMoreVerticalAlt)`
  font-size: 24px;
  position: absolute;
  top: 8px;
  right: 24px;
  cursor: pointer;
`;

export const ListaDeOpcoes = styled.div`
  background-color: ${variaveis.brancoFundo};
  border: 1px solid ${variaveis.cinza};
  border-radius: 8px;
  position: relative;
  right: 83px;
  top: -8px;
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  margin-bottom: 8px;
  z-index: 1;
`;

export const Opcoes = styled.button`
  font-weight: 500;
  width: 100%;
  border: none;
  background-color: ${variaveis.brancoFundo};
  border-bottom: 1px solid ${variaveis.cinza};
  padding: 8px;
  cursor: pointer;
  svg {
    font-size: 12px;
    margin-right: 8px;
  }
  animation: ${animOpacidade} 0.3s forwards;
`;
