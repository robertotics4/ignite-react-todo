import { PlusCircle } from "lucide-react";
import { SearchButton, SearchContainer, SearchInput, SearchInputContainer } from "./styles";

export function Search() {
  return (
    <SearchContainer>
      <SearchInputContainer>
        <SearchInput type="text" placeholder="Adicione uma nova tarefa" />
      </SearchInputContainer>
      <SearchButton>
        Criar
        <PlusCircle size={20} />
      </SearchButton>
    </SearchContainer>
  );
}