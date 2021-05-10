import React from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import CountTodo from "./components/CountTodo";

function App() {
	return (
		<section className="container">
			<header>
				<h1>Todo List</h1>
				<AddTodo />
			</header>
			<main>
				<TodoList />
			</main>
			<footer>
				<CountTodo />
			</footer>
		</section>
	);
}

export default App;
