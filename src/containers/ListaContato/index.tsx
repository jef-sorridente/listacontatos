import { useState } from "react";
import * as S from "./styles";
import Formulario from "../../components/Formulario";

import Titulo from "../../components/Titulo";
import Botao from "../../components/Botao";
import Contato from "../../components/Contato";

import { useSelector } from "react-redux";
import { RootReducer } from "../../store";
import Mensagem from "../../components/Mensagem";

const ListaContato = () => {
  const { itens, mensagem } = useSelector(
    (state: RootReducer) => state.contatos
  );
  const [abreForm, setAbreForm] = useState(false);

  return (
    <>
      {mensagem && <Mensagem>{mensagem}</Mensagem>}
      <S.ContainerLista>
        <S.Cabecalho>
          <Titulo childen={"Lista de Contatos"} />

          {abreForm ? (
            <>
              <Formulario />
              <Botao onClick={() => setAbreForm(false)} type="button">
                Fechar
              </Botao>
            </>
          ) : (
            <Botao onClick={() => setAbreForm(true)} type="button">
              + Novo Contato
            </Botao>
          )}
        </S.Cabecalho>
        <S.ListaCabecalho>
          <S.TituloLista>Nome</S.TituloLista>
          <S.TituloLista>Email</S.TituloLista>
          <S.TituloLista>Telefone</S.TituloLista>
          <S.TituloLista>Ações</S.TituloLista>
        </S.ListaCabecalho>
        {itens.map((c) => (
          <Contato
            key={c.id}
            id={c.id}
            nome={c.nome}
            email={c.email}
            telefone={c.telefone}
          />
        ))}
      </S.ContainerLista>
    </>
  );
};

export default ListaContato;
