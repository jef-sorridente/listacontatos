import { useState } from "react";
import logo from "../../../public/logotipo.png";
import perfil from "../../../public/perfil.png";
import * as S from "./styles";

import { IoMdSunny } from "react-icons/io";
import { IoMdMoon } from "react-icons/io";

const Cabecalho = () => {
  const [trocaTema, setTrocaTema] = useState(false);

  const trocaTemaBotao = () => {
    setTrocaTema(!trocaTema);
  };

  return (
    <S.Cabecalho>
      <h1>
        <img src={logo} alt="logo" />
      </h1>
      <S.Perfil>
        <S.BotaoTrocaTema onClick={trocaTemaBotao}>
          {trocaTema ? <IoMdMoon /> : <IoMdSunny />}
        </S.BotaoTrocaTema>
        <S.PerfilImagem>
          <img src={perfil} alt="foto de perfil" />
        </S.PerfilImagem>

        <p>Jeferson Soares</p>
      </S.Perfil>
    </S.Cabecalho>
  );
};

export default Cabecalho;
