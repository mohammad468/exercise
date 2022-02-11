import { Container } from "react-bootstrap";
import "./App.scss";

// !redux
import { Provider } from "react-redux";
import store from "./redux/store";

// ?components
import Counter from "./components/Counter";
import Users from "./components/Users";

function App() {
  return (
    <Provider store={store}>
      <Container className="text-center">
        <Counter />
        <Users />
      </Container>
    </Provider>
  );
}

export default App;
