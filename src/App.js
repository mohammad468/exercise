import { Container } from "react-bootstrap";
import "./App.scss";
import Counter from "./components/Counter";

const increaseContext = React.createContext();

function App() {
  return (
    <increaseContext.Provider>
      <Container>
        <Counter />
      </Container>
    </increaseContext.Provider>
  );
}

export default App;
