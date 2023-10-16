import { Search } from "../Search";
import { Tasks } from "../Tasks";
import { Container } from "./styles";

export function Main() {
  return (
    <Container>
      <Search />
      <Tasks />
    </Container>
  );
}