import type { Task, Theme } from "../App"
import TaskItem from "./TaskItem"

type TaskListProps = {
  tasks: Task[]
  handleRemoveTask: (id: string) => void
  handleChangeTask: (id: string) => void
  theme: Theme
}


export default function TaskList({tasks, handleRemoveTask, handleChangeTask, theme}: TaskListProps) {
  return (
    <div className={`todo-list-${theme}`}>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          id={task.id}
          title={task.title}
          done={task.done}
          handleRemoveTask={handleRemoveTask}
          handleChangeTask={handleChangeTask}
          theme={theme}
        />
      ))}
    </div>
  )
}
