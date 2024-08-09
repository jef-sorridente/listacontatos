import { useDispatch } from "react-redux";
import ContatoClass from "../../models/Contato";
import { useEffect, useState } from "react";
import { remover, editar } from "../../store/reducers/contatos";

import { FaTrash } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

import * as S from "./styles";

type Props = ContatoClass;

const Contato = ({
  id,
  nome: nomeOrig,
  email: emailOrig,
  telefone: telefoneOrig,
}: Props) => {
  const dispatch = useDispatch();
  const [estaEditando, setEstaEditando] = useState(false);
  const [abreAcoes, setAbreAcoes] = useState(false);

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");

  const abrirAcoes = () => {
    setAbreAcoes(!abreAcoes);
  };

  useEffect(() => {
    if (
      nomeOrig.length > 0 &&
      emailOrig.length > 0 &&
      telefoneOrig.length > 0
    ) {
      setNome(nomeOrig);
      setEmail(emailOrig);
      setTelefone(telefoneOrig);
    }
  }, [nomeOrig, emailOrig, telefoneOrig]);

  function salvaEdicao() {
    if (nome.length > 0 && email.length > 0 && telefone.length > 0) {
      dispatch(
        editar({
          id,
          nome,
          email,
          telefone,
        })
      );
      alert("Edição Realizada");
      setEstaEditando(false);
      setAbreAcoes(false);
    } else {
      alert("Os campos não podem ficar vazios, por favor verifique-os!");
    }
  }

  function cancelarEdicao() {
    setEstaEditando(false);
    setNome(nomeOrig);
    setEmail(emailOrig);
    setTelefone(telefoneOrig);
  }

  function removerItem() {
    dispatch(remover(id));
    alert(`Contato removido: ${nome}`);
  }

  const filtraNumeros = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    // Filtra apenas números da entrada
    const novoValor = e.target.value.replace(/[^0-9]/g, "");
    setTelefone(novoValor);
  };

  return (
    <ul>
      <S.ListaCorpo key={id}>
        <S.Input
          disabled={!estaEditando}
          value={nome}
          onChange={({ target }) => setNome(target.value)}
        ></S.Input>
        <S.Input
          disabled={!estaEditando}
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        ></S.Input>
        <S.Input
          required
          maxLength={11}
          disabled={!estaEditando}
          value={telefone}
          onChange={filtraNumeros}
        ></S.Input>
        <S.BotaoOpcoes type="button" onClick={abrirAcoes} />
        {abreAcoes && (
          <S.ListaDeOpcoes>
            {estaEditando ? (
              <>
                <S.Opcoes onClick={salvaEdicao}>
                  <MdEdit color="green" />
                  <span>Salvar</span>
                </S.Opcoes>
                <S.Opcoes onClick={cancelarEdicao}>
                  <FaTrash color="red" />
                  <span>Cancelar</span>
                </S.Opcoes>
              </>
            ) : (
              <>
                <S.Opcoes onClick={() => setEstaEditando(true)}>
                  <MdEdit color="green" />
                  <span>Editar</span>
                </S.Opcoes>
                <S.Opcoes onClick={removerItem}>
                  <FaTrash color="red" />
                  <span>Remover</span>
                </S.Opcoes>
              </>
            )}
          </S.ListaDeOpcoes>
        )}
      </S.ListaCorpo>
    </ul>
  );
};

export default Contato;
