import {TaskType} from "../../types/TaskType.ts"

interface TaskProps {
	task: TaskType
	onToggle: (id: number) => void
	deleteTask: (id: number) => void
}

const Task = ({task, onToggle, deleteTask}: TaskProps) => {
	return (
		<li className="flex items-center group gap-2 relative bg-slate-300 p-2 rounded-lg">
			<input className="scale-125" onChange={() => onToggle(task.id)} id={task.id.toString()} checked={task.completed} type="checkbox"/>
			<label className="select-none" htmlFor={task.id.toString()}>{task.text}</label>
			<button className="invisible group-hover:visible absolute top-1/2 -translate-y-1/2 hover:text-blue-500 transition-colors duration-200 right-2" onClick={() => deleteTask(task.id)} type="button">Delete</button>
		</li>
	)
}
export default Task
