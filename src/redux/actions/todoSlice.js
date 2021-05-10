import { createSlice } from "@reduxjs/toolkit";

const initialState = [
	{
		id: 0,
		title: "Buy a cake",
		completed: false
	}
];

const todoSlice = createSlice({
	name: "todos",
	initialState,
	reducers: {
		addTodo: (state, action) => {
			state.push(action.payload);
		},
		toggleTodo: (state, action) => {
			const index = state.findIndex((todo) => todo.id === action.payload.id);
			state[index].completed = !action.payload.completed;
		}
	}
});

export const { addTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
