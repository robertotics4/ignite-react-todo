import axios from 'axios';
import { useEffect, useState } from "react";
import { Search } from "../Search";
import { TaskEntity, Tasks } from "../Tasks";
import { Container } from "./styles";



const API_BASE_URL = 'http://localhost:3000'

export function Main() {
  const [tasks, setTasks] = useState<TaskEntity[]>([]);

  useEffect(() => {
    axios.get<TaskEntity[]>(`${API_BASE_URL}/tasks`)
    .then(result => {
      setTasks(result.data)
    })
  }, []);

  return (
    <Container>
      <Search />
      <Tasks taskList={tasks} />
    </Container>
  );
}