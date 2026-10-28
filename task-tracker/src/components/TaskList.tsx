import TaskItem from "./TaskItem"
type TaskListProps = {
    // age: number,
    // children: React.ReactNode,
}
type Task = {
    id: string,
    title: string,
    done: boolean,
}


export default function TaskList(){
    const defaultTasks: Task[] = [
    {id:'1', title: 'first', done: true },
    {id:'2', title: 'second', done: true },
    {id:'3', title: 'third', done: true },
    {id:'4', title: 'fourth', done: true },
]
  return <div>
    {defaultTasks.map((task) => (
        <TaskItem
        id={task.id}
        title={task.title}
        done={task.done}
    />
    ))}
  </div>
}