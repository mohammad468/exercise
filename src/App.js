import { Container } from "react-bootstrap";
import "./App.scss";

// !redux
import { Provider } from "react-redux";
import store from "./redux/store";

// ?components
import Counter from "./components/Counter";
import User from "./components/User";
import Users from "./components/Users";

function App() {
  return (
    <Provider store={store}>
      <Container className="text-center">
        <Counter />
        <User />
        <Users />
      </Container>
    </Provider>
  );
}

export default App;
