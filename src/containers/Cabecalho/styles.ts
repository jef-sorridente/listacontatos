import styled from "styled-components";
import variaveis from "../../styles/variaveis";

export const Cabecalho = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Perfil = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  p {
    font-weight: 500;
  }
`;

export const PerfilImagem = styled.div`
  width: 70px;
  height: 70px;
  border: 1px solid ${variaveis.cinza};
  border-radius: 50%;
  overflow: hidden;

  img {
    height: 100%;
  }
`;

export const BotaoTrocaTema = styled.div`
  display: flex;
  width: 48px;
  padding: 2px;
  border-radius: 16px;
  background-color: ${variaveis.cinza};
  cursor: pointer;

  svg {
    font-size: 22px;
    background-color: ${variaveis.branco};
    border-radius: 50%;
    padding: 1px;
  }
`;
