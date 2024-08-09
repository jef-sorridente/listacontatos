import { Provider } from "react-redux";

import Cabecalho from "./containers/Cabecalho";
import ListaContato from "./containers/ListaContato";
import EstiloGlobal, { Container } from "./styles";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <Cabecalho />
        <ListaContato />
      </Container>
    </Provider>
  );
}

export default App;
