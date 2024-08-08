import * as S from "./styled";
import { useState } from "react";

import { FaTrash } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remover } from "../../store/reducers/contatos";

type Props = {
  idContato: number;
};

const BotaoAcoes = ({ idContato }: Props) => {
  const dispatch = useDispatch();

  const [abreAcoes, setAbreAcoes] = useState(false);

  const abrirAcoes = () => {
    setAbreAcoes(!abreAcoes);
  };

  return (
    <div>
      <S.BotaoOpcoes type="button" onClick={abrirAcoes} />

      {abreAcoes && (
        <S.ListaDeOpcoes>
          <S.Opcoes>
            <MdEdit color="green" />
            <span>Editar</span>
          </S.Opcoes>
          <S.Opcoes onClick={() => dispatch(remover(idContato))}>
            <FaTrash color="red" />
            <span>Remover</span>
          </S.Opcoes>
        </S.ListaDeOpcoes>
      )}
    </div>
  );
};

export default BotaoAcoes;
