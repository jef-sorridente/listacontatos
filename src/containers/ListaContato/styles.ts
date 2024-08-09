import styled from "styled-components";
import variaveis from "../../styles/variaveis";
import { ListaPadrao } from "../../components/Contato/styles";

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
  position: relative;
`;

export const ListaCabecalho = styled(ListaPadrao)`
  background-color: ${variaveis.cinza};
`;
export const TituloLista = styled.p`
  font-weight: 500;
`;
