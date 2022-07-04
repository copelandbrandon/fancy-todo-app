import "./TodoList.css";
import { TodoListItem } from "../todoListItem/TodoListItem";
import { selectTodos } from "../../features/todo/todosSlice";
import { useAppSelector } from "../../app/hooks";

export const TodoList = () => {
  const todos = useAppSelector(selectTodos);

  return (
    <div className="todo-list-container">
      {Object.values(todos).map((todo: any) => (
        <TodoListItem item={todo} key={todo.id} />
      ))}
    </div>
  );
};
