import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions/todoSlice";
import { Form, Input, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const AddTodo = () => {
	const [title, setTitle] = useState("");
	const dispatch = useDispatch();

	const addNewTodo = () => {
		dispatch(
			addTodo({
				id: Math.round(Math.random(100) * 100),
				title,
				completed: false
			})
		);
	};

	return (
		<Form
			style={{
				display: "flex",
				flexDirection: "row"
			}}
		>
			<Form.Item
				name="title"
				label="Title"
				rules={[
					{
						required: true,
						message: "Please input todo name!"
					}
				]}
			>
				<Input
					size="large"
					type="text"
					value={title}
					required
					placeholder="todo name ..."
					onChange={(e) => setTitle(e.target.value)}
				/>
			</Form.Item>
			<Form.Item>
				<Button
					size="large"
					type="primary"
					onClick={addNewTodo}
					icon={<PlusOutlined />}
				>
					Add
				</Button>
			</Form.Item>
		</Form>
	);
};

export default AddTodo;
