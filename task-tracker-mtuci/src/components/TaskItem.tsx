import type { Theme } from "../App"


type TaskItemProps = {
  id: string,
  title: string,
  done: boolean,
  handleRemoveTask: (id: string) => void
  handleChangeTask: (id: string) => void
  theme: Theme
}

export default function TaskItem({id, title, done, handleRemoveTask, handleChangeTask, theme} :TaskItemProps){
  
  const handleRemove = () => {
    handleRemoveTask(id)
  }
  return (
    <div className={`todo-item-${theme}`} 
    style={{backgroundColor: (done) ? 'green' : 'red'}}
    onClick={()=>handleChangeTask(id)}>
      <h2>{title}</h2>
      <button onClick={handleRemove}>x</button>
    </div>
  )
}
