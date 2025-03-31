import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import { vi } from "vitest";
import NewTaskForm from "../components/molecules/NewTaskForm.tsx" // Use `jest.fn()` instead if using Jest

describe("NewTaskForm", () => {
	test("renders input and button", () => {
		render(<NewTaskForm text="" setText={() => {}} handleSubmit={() => {}} />);

		expect(screen.getByPlaceholderText("New Task")).toBeInTheDocument();
		expect(screen.getByRole("button", { name: /add task/i })).toBeInTheDocument();
	});

	test("updates input value when typing", () => {
		const setText = vi.fn();
		render(<NewTaskForm text="" setText={setText} handleSubmit={() => {}} />);

		const input = screen.getByPlaceholderText("New Task");
		fireEvent.change(input, { target: { value: "New Task Example" } });

		expect(setText).toHaveBeenCalledWith("New Task Example");
	});

	test("disables button when input is empty", () => {
		render(<NewTaskForm text="" setText={() => {}} handleSubmit={() => {}} />);
		const button = screen.getByRole("button", { name: /add task/i });

		expect(button).toBeDisabled();
	});

	test("enables button when input has text", () => {
		render(<NewTaskForm text="New Task" setText={() => {}} handleSubmit={() => {}} />);
		const button = screen.getByRole("button", { name: /add task/i });

		expect(button).not.toBeDisabled();
	});

	test("calls handleSubmit on form submission", () => {
		const handleSubmit = vi.fn();
		render(<NewTaskForm text="New Task" setText={() => {}} handleSubmit={handleSubmit} />);

		const form = screen.getByRole("form");
		fireEvent.submit(form);

		expect(handleSubmit).toHaveBeenCalledTimes(1);
	});
});
