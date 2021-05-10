import React from "react";
import { useSelector } from "react-redux";

const CountTodo = () => {
	const todos = useSelector((state) => state.todos);
	const count = todos.filter((todo) => todo.completed).length;
	return <div>Todo completed : {count >= 0 ? count : 0}</div>;
};

export default CountTodo;
