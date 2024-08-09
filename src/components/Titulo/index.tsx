import { TituloStyled } from "./styled";

type Props = {
  childen?: React.ReactNode;
};

const Titulo = ({ childen }: Props) => <TituloStyled>{childen}</TituloStyled>;

export default Titulo;
