import type React from "react"
import type { Theme } from '../App'

type AddFormProps = {
    addNewTask: (title: string) => void,
    theme: Theme,
}

export default function AddForm({ addNewTask, theme }: AddFormProps) {

    const handleAddTask = (event: React.KeyboardEvent<HTMLInputElement>) =>  {
        console.log(event.key)
        if (event.key === 'Enter' && event.currentTarget.value !== ''){
            addNewTask(event.currentTarget.value)
            event.currentTarget.value = ''
        }
    }

    return (
        <div className={`add-form-${theme}`}>
            <input onKeyDown={handleAddTask}/>
        </div>
    )
}