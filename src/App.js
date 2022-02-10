import { Container } from "react-bootstrap";
import "./App.scss";

// !redux
import { Provider } from "react-redux";
import store from "./redux/Store";

// ?components
import Counter from "./components/Counter";

function App() {
  return (
    <Provider store={store}>
      <Container className="text-center">
        <Counter />
      </Container>
    </Provider>
  );
}

export default App;
