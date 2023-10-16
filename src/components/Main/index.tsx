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

  async function finishTask(id: number) {
    try {
      const now = new Date()

      await axios.put(`${API_BASE_URL}/tasks/${id}`, {
        ...tasks[id],
        finishedAt: now
      })

      const updatedTasks = tasks.map(task => {
        const updated = {...task}

        if (updated.id === id) {
          updated.finishedAt = now;
        }

        return updated;
      })

      setTasks(updatedTasks)
    } catch (error) {
      alert('Falha ao finalizar tarefa')
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
      <Tasks taskList={tasks} removeTask={removeTask} finishTask={finishTask} />
    </Container>
  );
}