import { useState } from "react";
import * as S from "./styles";
import Formulario from "../Formulario";
import { Botao } from "../../styles";
import { useSelector } from "react-redux";
import { RootReducer } from "../../store";
import BotaoAcoes from "../../components/BotaoAcoes";

const Lista = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos);
  const [abreForm, setAbreForm] = useState(false);

  const abreFormCadastro = () => {
    setAbreForm(!abreForm);
  };

  return (
    <S.ContainerLista>
      <S.Cabecalho>
        <S.Titulo>Lista de Contatos</S.Titulo>
        {abreForm ? (
          <>
            <Formulario /> <Botao onClick={abreFormCadastro}>Cancelar</Botao>
          </>
        ) : (
          <Botao onClick={abreFormCadastro}>+ Novo Contato</Botao>
        )}
      </S.Cabecalho>
      <S.ListaCabecalho>
        <S.TituloLista>Nome</S.TituloLista>
        <S.TituloLista>Email</S.TituloLista>
        <S.TituloLista>Telefone</S.TituloLista>
        <S.TituloLista>Ações</S.TituloLista>
      </S.ListaCabecalho>
      <S.Lista>
        {itens.map((c) => (
          <S.ListaCorpo key={c.id}>
            <p>{c.nome}</p>
            <p>{c.email}</p>
            <p>{c.telefone}</p>
            <BotaoAcoes idContato={c.id} />
          </S.ListaCorpo>
        ))}
      </S.Lista>
    </S.ContainerLista>
  );
};

export default Lista;
