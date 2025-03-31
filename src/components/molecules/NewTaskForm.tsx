
interface NewTaskFormProps {
	handleSubmit: (e: React.ChangeEvent<HTMLFormElement>) => void
	setText:  React.Dispatch<React.SetStateAction<string>>
	text: string
}

const NewTaskForm = ({handleSubmit,  setText, text}: NewTaskFormProps) => {



	return (
		<form role="form" onSubmit={handleSubmit} className="flex items-center gap-2 w-full">
			<input placeholder="New Task" value={text} onChange={(e) => setText(e.target.value)} className="focus:outline-none border-2 border-slate-400 rounded-lg p-2 w-full" type="text" required />
			<button disabled={text.trim() === ""}  className="bg-pink-500 disabled:bg-pink-300 disabled:cursor-not-allowed hover:bg-pink-600 text-white p-2 rounded-lg min-w-fit " type="submit">Add Task</button>
		</form>
	)
}
export default NewTaskForm
