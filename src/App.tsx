import { Header } from "./components/Header";
import { Container } from "./components/Container";
import GlobalStyles from "./styles/global";
import { Main } from "./components/Main";

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Header />
        <Main />
      </Container>
    </>
  );
}

export default App
