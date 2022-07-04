import "./TodoForm.css";
import { useAppDispatch } from "../../app/hooks";
import React, { useState } from "react";
import { addTodo } from "../../features/todo/todosSlice";
import { v4 as uuidv4 } from "uuid";

export const TodoForm = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useAppDispatch();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (todo.length < 1) return;

    dispatch(addTodo({ isCompleted: false, text: todo, id: uuidv4() }));
    setTodo("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <label className="todo-input-label">What's on your mind today?</label>
      <input
        className="todo-input"
        type="text"
        value={todo}
        onChange={handleChange}
      />
    </form>
  );
};
