import {TaskType as TaskType} from "../../types/TaskType.ts"
import Task from "../atoms/Task.tsx"

interface TaskListProps {
	tasks: TaskType[]
	onToggle: (id: number) => void
	deleteTask: (id: number) => void
}



const TaskList = ({tasks, onToggle, deleteTask}: TaskListProps) => {
	return (
		<ul className="flex w-full flex-col gap-2 min-h-[200px] max-h-[300px] overflow-y-auto">{tasks.map((task) => (
			<Task deleteTask={deleteTask}  task={task} key={task.id} onToggle={onToggle} />
		))}
			<li>{tasks.length === 0 && <p className="text-center text-slate-500">No tasks found</p>}</li>
		</ul>
	)
}
export default TaskList
