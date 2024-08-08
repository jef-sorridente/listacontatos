import { useDispatch } from "react-redux";
import { FormEvent, useState } from "react";
import { cadastrar } from "../../store/reducers/contatos";
import { Botao } from "../../styles";
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
              value={telefone}
              type="tel"
              id="tel"
              onChange={({ target }) => setTelefone(target.value)}
            />
          </S.Campos>
          <Botao type="submit">Cadastrar</Botao>
        </S.Formulario>
      </S.ContainerForm>
    </>
  );
};

export default Formulario;
