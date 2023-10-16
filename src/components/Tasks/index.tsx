import { Trash2 } from "lucide-react";
import { TasksContainer, TaskHeaderInfo, TasksHeader, TaskHeaderCreated, TaskHeaderDone, TaskList, TaskComponent } from "./styles";

export function Tasks() {
  return (
    <TasksContainer>
      <TasksHeader>
        <TaskHeaderInfo>
          <TaskHeaderCreated>Tarefas criadas</TaskHeaderCreated>
          <div>
            <span>5</span>
          </div>
        </TaskHeaderInfo>
        <TaskHeaderInfo>
          <TaskHeaderDone>Tarefas concluídas</TaskHeaderDone>
          <div>
            <span>2 de 5</span>
          </div>
        </TaskHeaderInfo>
      </TasksHeader>

      <TaskList>
        <TaskComponent>
          <button type="button" />
          <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
          <Trash2 size={20} />
        </TaskComponent>

        <TaskComponent>
          <button type="button" />
          <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
          <Trash2 size={20} />
        </TaskComponent>
      </TaskList>
    </TasksContainer>
  );
}