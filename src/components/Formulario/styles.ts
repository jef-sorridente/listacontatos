import styled from "styled-components";
import variaveis from "../../styles/variaveis";
import { animOpacidade } from "../../styles";

export const ContainerForm = styled.div`
  width: 300px;
  position: absolute;
  top: 185px;
  right: 330px;
  border: 1px solid ${variaveis.cinza};
  border-radius: 8px;
  z-index: 5;
`;

export const Titulo = styled.h2`
  text-align: center;
  margin-bottom: 32px;
  font-weight: 600;
`;

export const Formulario = styled.form`
  width: 100%;
  max-width: 600px;
  display: flex;
  padding: 32px;
  flex-direction: column;
  position: relative;
  top: calc(600px - 50%);
  left: 50%;
  transform: translate(-50%);
  background-color: ${variaveis.brancoFundo};
  overflow: hidden;

  button {
    margin: auto;
  }
  animation: ${animOpacidade} 0.3s forwards;
`;

export const Campos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-bottom: 16px;

  input {
    width: 100%;
    height: 30px;
    border: none;
    border-radius: 8px;
    border: 1px solid ${variaveis.cinza};
  }
`;
