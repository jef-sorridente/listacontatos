import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Contato from "../../models/Contato";

type ContatoState = {
  itens: Contato[];
};

const initialState: ContatoState = {
  itens: [
    {
      id: 1,
      nome: "Jeferson Soares",
      email: "jefersonsoares@gmail.com",
      telefone: "519999999999",
    },
    {
      id: 2,
      nome: "Ana Paula",
      email: "anapaula@gmail.com",
      telefone: "519888888888",
    },
    {
      id: 3,
      nome: "Carlos Silva",
      email: "carlossilva@gmail.com",
      telefone: "519777777777",
    },
  ],
};

const contatosSlice = createSlice({
  name: "contatos",
  initialState,
  reducers: {
    cadastrar: (state, action: PayloadAction<Omit<Contato, "id">>) => {
      // Compara se o contato já existe pelo telefone e email
      const contatoJaExiste = state.itens.find(
        (contato) =>
          contato.email.toLocaleLowerCase() ===
            action.payload.email.toLocaleLowerCase() &&
          contato.telefone === action.payload.telefone
      );
      //Verifica se o contato é existente pela const contatoJaExiste
      if (contatoJaExiste) {
        alert("Já existe um contato com esse e-mail ou número!");
      } else {
        const ultimoContato = state.itens[state.itens.length - 1];
        const contatoNovo = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1,
        };
        state.itens.push(contatoNovo);
        alert("Contato adicionado!");
      }
    },
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((c) => c.id !== action.payload);
    },
  },
});

export const { cadastrar, remover } = contatosSlice.actions;

export default contatosSlice.reducer;
