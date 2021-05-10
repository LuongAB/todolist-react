import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
	const todos = useSelector((state) => state.todos);

	return (
		<section>
			{todos.map((todo) => (
				<TodoItem key={todo.id} {...todo} />
			))}
		</section>
	);
};

export default TodoList;
