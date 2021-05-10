import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../redux/actions/todoSlice";
export const store = configureStore({
	reducer: {
		todos: todoReducer
	}
});
