import "./TodoListItem.css";
import { useAppDispatch } from "../../app/hooks";
import { removeTodo } from "../../features/todo/todosSlice";

interface ListItemProps {
  item: any;
}

export const TodoListItem = ({ item }: ListItemProps) => {
  const dispatch = useAppDispatch();

  const handleRemoveClick = () => {
    dispatch(removeTodo(item.id));
  };

  return (
    <div className="todo-item-container">
      <div className="todo-item-btn-group">
        <button className="todo-item-remove-btn" onClick={handleRemoveClick}>
          Remove
        </button>
        <button className="todo-item-done-btn">Done</button>
      </div>
      <p className="todo-item-text">{item.text}</p>
    </div>
  );
};
