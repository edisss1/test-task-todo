import TaskList from "./components/molecules/TaskList.tsx"
import NewTaskForm from "./components/molecules/NewTaskForm.tsx"
import TodoControls from "./components/molecules/TodoControls.tsx"
import {useEffect, useState} from "react"
import {TaskType} from "./types/TaskType.ts"


function App() {
  const [tasks, setTasks] = useState<TaskType[]>(localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")!) : [])
    const [text, setText] = useState<string>('')
    const [filter, setFilter] = useState<"all" | "active" | "completed">('all')

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (text.trim() === "") return
        const newTask: TaskType = {
            id: Date.now(),
            text: text,
            completed: false,
        }
        setTasks((prev) => [...prev, newTask])
        setText("")
    }

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks])


    const filteredTasks = tasks.filter((task) => {
      if (filter === "active") {
          return !task.completed
      }  else if (filter === "completed") {
          return task.completed
      }
      return true
    })


    const handleComplete = (id: number) => {
        const newTasks = tasks.map((task) => {
            if (task.id === id) {
                return {...task, completed: !task.completed}
            }
            return task
        })
        setTasks(newTasks)
    }

    const clearCompleted = () => {
      setTasks((prev) => prev.filter((task) => !task.completed))
    }

    const deleteTask = (id: number) => {
      setTasks((prev) => prev.filter((task) => task.id !== id))
    }

  return (
   <div className="w-full max-w-[500px] max-h-[400px]  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4 p-4 items-center bg-slate-200 rounded-lg">
     <NewTaskForm setText={setText} handleSubmit={handleSubmit} text={text}/>
       <TaskList deleteTask={deleteTask} tasks={filteredTasks} onToggle={handleComplete} />
     <TodoControls filter={filter} clearCompleted={clearCompleted} setFilter={setFilter} tasksLength={tasks.filter((task) => !task.completed).length}/>
   </div>
  )
}

export default App
