import "./TodoList.css";
import { TodoListItem } from "../todoListItem/TodoListItem";
export const TodoList = () => {
  return (
    <div className="todo-list-container">
      <TodoListItem itemText="ExampleItem" />
    </div>
  );
};
