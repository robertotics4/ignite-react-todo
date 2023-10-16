import { Check, Trash2 } from "lucide-react";
import { TasksContainer, TaskHeaderInfo, TasksHeader, TaskHeaderCreated, TaskHeaderDone, TaskList, TaskComponent, TrashButton, CheckButton } from "./styles";
import { useMemo } from "react";

export interface TaskEntity {
  id: number
  description: string
  finishedAt?: Date
  deletedAt?: Date
}

type TasksProps = {
  taskList: TaskEntity[]
  removeTask: (id: number) => void
  finishTask: (id: number) => void
}

export function Tasks({ taskList, removeTask, finishTask }: TasksProps) {
  const createdTasks = useMemo(() => {
    return taskList.filter(task => !task.deletedAt)
  }, [taskList])

  const finishedTasks = useMemo(() => {
    return taskList.filter(task => !!task.finishedAt)
  }, [taskList])

  return (
    <TasksContainer>
      <TasksHeader>
        <TaskHeaderInfo>
          <TaskHeaderCreated>Tarefas criadas</TaskHeaderCreated>
          <div>
            <span>{createdTasks.length}</span>
          </div>
        </TaskHeaderInfo>
        <TaskHeaderInfo>
          <TaskHeaderDone>Tarefas concluídas</TaskHeaderDone>
          <div>
            <span>{`${finishedTasks.length} de ${createdTasks.length}`}</span>
          </div>
        </TaskHeaderInfo>
      </TasksHeader>

      <TaskList>
        {taskList.map(task => (
          <TaskComponent finished={!!task.finishedAt} key={task.id}>
            <CheckButton finished={!!task.finishedAt} type="button" onClick={() => finishTask(task.id)}>
              {!!task.finishedAt && <Check size={20} />}
            </CheckButton>
            <p>{task.description}</p>

            <TrashButton type="button" onClick={() => removeTask(task.id)}>
              <Trash2 size={20} />
            </TrashButton>
          </TaskComponent>
        ))}
      </TaskList>
    </TasksContainer>
  );
}