import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodo } from "../redux/actions/todoSlice";
import { Checkbox, Card, Typography } from "antd";
const { Text } = Typography;

const TodoItem = (todo) => {
	const { id, title, completed } = todo;
	const dispatch = useDispatch();

	const changeTodoStatus = () => {
		dispatch(toggleTodo({ id, completed }));
	};

	return (
		<Card size="default">
			<Checkbox checked={completed} onChange={changeTodoStatus}></Checkbox>
			{completed ? (
				<Text type="success" strong delete>
					{" "}
					- {title}
				</Text>
			) : (
				<Text type="secondary"> - {title}</Text>
			)}
		</Card>
	);
};

export default TodoItem;
