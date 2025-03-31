interface TodoControlsProps {
	tasksLength: number
	setFilter: (filter: "all" | "active" | "completed") => void
	clearCompleted: () => void
	filter: "all" | "active" | "completed"
}

const TodoControls = ({tasksLength, setFilter, clearCompleted, filter}: TodoControlsProps) => {
	return (
		<div className="flex items-center justify-between text-sm gap-2 w-full">
			<div className="flex items-center gap-0.5">
				<span>{tasksLength}</span>
				<p>items left</p>
			</div>
			<div className="flex items-center gap-2 [&>*]:cursor-pointer ">
				<button className={filter === "all" ? "text-blue-500" : ""} onClick={() => setFilter("all")}>All</button>
				<button  className={filter === "active" ? "text-blue-500" : ""} onClick={() => setFilter("active")}>Active</button>
				<button  className={filter === "completed" ? "text-blue-500" : ""} onClick={() => setFilter("completed")}>Completed</button>
			</div>
			<button className="cursor-pointer"  onClick={clearCompleted}>Clear Completed</button>
		</div>
	)
}
export default TodoControls
