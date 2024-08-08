import styled from "styled-components";
import variaveis from "../../styles/variaveis";

export const ContainerLista = styled.div`
  padding: 16px;
  margin-top: 32px;
  border: 1px solid ${variaveis.cinza};
  border-radius: 16px;
  background-color: ${variaveis.branco};
`;

export const Cabecalho = styled.div`
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Titulo = styled.h2`
  font-size: 24px;
  font-weight: 600;
`;

export const Lista = styled.ul`
  height: calc(100vh - 346px);
  overflow-y: scroll;
`;

export const ListaPadrao = styled.li`
  display: grid;
  grid-template-columns: repeat(3, 30%) 5%;
  justify-content: space-between;
  padding: 16px;
  text-align: start;
`;

export const ListaCabecalho = styled(ListaPadrao)`
  background-color: ${variaveis.cinza};
`;

export const ListaCorpo = styled(ListaPadrao)`
  font-size: 14px;
  border-top: 1px solid ${variaveis.brancoFundo};
  height: 60px;
`;

export const TituloLista = styled.p`
  font-weight: 500;
`;
