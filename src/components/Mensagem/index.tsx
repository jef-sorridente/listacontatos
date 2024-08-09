import { MensagemStyled } from "./styles";

type Props = {
  children: string;
};

const Mensagem = ({ children }: Props) => {
  setTimeout(() => {}, 1000);
  return (
    <MensagemStyled>
      <p>{children}</p>
    </MensagemStyled>
  );
};

export default Mensagem;
