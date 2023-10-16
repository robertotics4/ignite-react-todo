import { PlusCircle } from "lucide-react";
import { Button, Container, Input, InputContainer } from "./styles";
import { TaskEntity } from "../Tasks";
import { FormEvent, useState } from "react";

type InputTaskProps = {
  addTask: (task: TaskEntity) => void
  getNextId: () => number
}

export function InputTask({ getNextId, addTask }: InputTaskProps) {
  const [description, setDescription] = useState<string>('')

  function handleChangeInput(event: FormEvent<HTMLInputElement>) {
    setDescription(event.currentTarget.value)
  }

  function handleButton(event: FormEvent<HTMLButtonElement>) {
    event.preventDefault()

    if(description !== '') {
      addTask({
        id: getNextId(),
        description,
      })

      setDescription('')
    }
  }

  return (
    <Container>
      <InputContainer>
        <Input
          type="text"
          placeholder="Adicione uma nova tarefa"
          onChange={handleChangeInput}
          value={description}
        />
      </InputContainer>

      <Button type="button" onClick={handleButton}>
        Criar
        <PlusCircle size={20} />
      </Button>
    </Container>
  );
}