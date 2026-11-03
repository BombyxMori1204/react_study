import { useState } from "react";
import AddForm from "./components/AddForm";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

export type Task = {
  id: string,
  title: string,
  done: boolean
}
export type Theme = "light" | "dark"

export default function App() {

  const defaultTasks: Task[] = [
    { id: '1', title: 'Title 1', done: true },
    { id: '2', title: 'Title 2', done: false },
    { id: '3', title: 'Title 3', done: true },
  ]

  const [tasks, setTasks] = useState(defaultTasks)
  const [theme,setTheme] = useState<Theme>('light')
  // Создайте состояние theme, которое будет принимать строку 'light' или 'dark'
  // Передайте как проп само состояние в компонент AddForm, TaskList и TaskItem 
  // Используя форматирование строки, добавьте к каждому стилю (add-form, todo-list, todo-item) постфикс состояния theme (подсказка итогового значения лежит в index.css) 
  // Убедитесь что светлая тема применилась ко всем элементам.
  // Создайте обрабочтик который переключает состояние с светлого на темный и передайте его в Header (там вас ждет заготовленный свитч)

  const handleToggleTheme = () => {
    setTheme((currentTheme) => currentTheme === 'light' ? 'dark' : 'light')
  }
 
  const addNewTask = (title: string) => {
    const newTask = {
      id: crypto.randomUUID(),
      title, 
      done: false
    }
    setTasks([...tasks, newTask])
  }

  const handleRemoveTask = (id: string) => {
    const filtered = tasks.filter((task) => task.id !== id)
    setTasks(filtered)
  }

  // Добавьте новый метод handleChangeTask, который по событие onClick на контейнер карты будет менять 
  // сво-во done с true на false и наоборот. Функция также должна получить id и должна быть передана в компонент TaskItem
  const handleChangeTask = (id: string) => {
    setTasks((prev) =>
        prev.map((task) =>
          task.id === id ? { ...task, done: !task.done } : task
        )
      );
  }
  return (
    <div className={`main theme-${theme}`}>
      <Header theme={theme} onToggleTheme={handleToggleTheme} />
      <AddForm theme={theme} addNewTask={addNewTask} />
      <TaskList theme={theme} 
      handleRemoveTask={handleRemoveTask}
      handleChangeTask={handleChangeTask} 
      tasks={tasks}/>
    </div>
  )
}