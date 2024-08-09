import styled from "styled-components";
import variaveis from "../../styles/variaveis";

export const BotaoPadrao = styled.button`
  padding: 8px;
  width: 110px;
  border: none;
  border-radius: 8px;
  background-image: linear-gradient(
    45deg,
    ${variaveis.azul},
    ${variaveis.verde}
  );
  color: ${variaveis.branco};
  font-weight: 500;
  cursor: pointer;
`;
