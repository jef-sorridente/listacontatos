import { useDispatch } from "react-redux";
import { FormEvent, useState } from "react";
import { cadastrar, resetaMensagem } from "../../store/reducers/contatos";
import Botao from "../Botao";
import * as S from "./styles";

const Formulario = () => {
  const dispatch = useDispatch();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");

  const cadastraNovoContato = (e: FormEvent) => {
    e.preventDefault();

    if (nome && email && telefone) {
      dispatch(
        cadastrar({
          nome,
          email,
          telefone,
        })
      );
    }
    setNome("");
    setEmail("");
    setTelefone("");
    resetaMsn();
  };

  const resetaMsn = () => {
    setTimeout(() => {
      dispatch(resetaMensagem());
    }, 3000);
  };

  return (
    <>
      <S.ContainerForm>
        <S.Formulario onSubmit={cadastraNovoContato}>
          <S.Titulo>Novo Contato</S.Titulo>
          <S.Campos>
            <label htmlFor="nome">Nome</label>
            <input
              required
              maxLength={50}
              value={nome}
              type="text"
              id="nome"
              onChange={({ target }) => setNome(target.value)}
            />
          </S.Campos>
          <S.Campos>
            <label htmlFor="email">Email</label>
            <input
              required
              minLength={3}
              maxLength={50}
              value={email}
              type="email"
              id="email"
              onChange={({ target }) => setEmail(target.value)}
            />
          </S.Campos>
          <S.Campos>
            <label htmlFor="tel">Telefone</label>
            <input
              required
              minLength={8}
              maxLength={11}
              value={telefone}
              type="tel"
              id="tel"
              onChange={({ target }) => setTelefone(target.value)}
            />
          </S.Campos>
          <Botao type="submit" children="Cadastrar" />
        </S.Formulario>
      </S.ContainerForm>
    </>
  );
};

export default Formulario;
