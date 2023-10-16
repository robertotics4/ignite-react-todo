import axios from 'axios';
import { useEffect, useState } from "react";
import { TaskEntity, Tasks } from "../Tasks";
import { Container } from "./styles";
import { InputTask } from '../InputTask';

const API_BASE_URL = 'http://localhost:3000'

export function Main() {
  const [tasks, setTasks] = useState<TaskEntity[]>([]);

  function getNextId(): number {
    return (tasks.length + 1) + 1
  }

  async function addTask(task: TaskEntity) {
    try {
      await axios.post(`${API_BASE_URL}/tasks`, task)

      setTasks([...tasks, task])
    } catch (error) {
      alert('Falha ao adicionar tarefa')
    }
  }

  async function removeTask(id: number) {
    try {
      await axios.delete(`${API_BASE_URL}/tasks/${id}`)

      setTasks(tasks.filter(task => task.id !== id))
    } catch (error) {
      alert('Falha ao deletar tarefa')
    }
  }

  useEffect(() => {
    axios.get<TaskEntity[]>(`${API_BASE_URL}/tasks`)
    .then(result => {
      setTasks(result.data)
    })
  }, []);

  return (
    <Container>
      <InputTask getNextId={getNextId} addTask={addTask} />
      <Tasks taskList={tasks} removeTask={removeTask} />
    </Container>
  );
}