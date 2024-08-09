import { BotaoPadrao } from "./styled";

type Props = {
  children: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
};

const Botao = ({ children, onClick }: Props) => (
  <BotaoPadrao onClick={onClick}>{children}</BotaoPadrao>
);

export default Botao;
