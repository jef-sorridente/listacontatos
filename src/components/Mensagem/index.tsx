import { MensagemStyled } from "./styles";

type Props = {
  children: string;
};

const Mensagem = ({ children }: Props) => {
  return (
    <MensagemStyled>
      <p>{children}</p>
    </MensagemStyled>
  );
};

export default Mensagem;
