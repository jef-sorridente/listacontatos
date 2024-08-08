import { Provider } from "react-redux";

import Cabecalho from "./containers/Cabecalho";
import Lista from "./containers/Lista";
import EstiloGlobal, { Container } from "./styles";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <Cabecalho />
        <Lista />
      </Container>
    </Provider>
  );
}

export default App;
