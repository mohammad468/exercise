import { Container } from "react-bootstrap";
import "./App.scss";
import Counter from "./components/Counter";

const increaseContext = React.createContext();

function App() {
  return (
    <Container>
      <Counter />
    </Container>
  );
}

export default App;
