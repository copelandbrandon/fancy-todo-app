import "./TodoListItem.css";
import { useAppDispatch } from "../../app/hooks";
import {
  removeTodo,
  completeTodo,
  recompleteTodo,
} from "../../features/todo/todosSlice";

interface ListItemProps {
  item: any;
}

export const TodoListItem = ({ item }: ListItemProps) => {
  const dispatch = useAppDispatch();

  const handleRemoveClick = () => {
    dispatch(removeTodo(item.id));
  };

  const handleDoneClick = () => {
    dispatch(completeTodo(item.id));
  };

  const handleRedoClick = () => {
    dispatch(recompleteTodo(item.id));
  };

  return (
    <div
      className={
        item.isCompleted ? "completed-item-container" : "todo-item-container"
      }
    >
      <div className="todo-item-btn-group">
        <button
          className={
            item.isCompleted
              ? "complete-item-remove-btn"
              : "todo-item-remove-btn"
          }
          onClick={handleRemoveClick}
        >
          Remove
        </button>
        <button
          className={
            item.isCompleted ? "complete-item-done-btn" : "todo-item-done-btn"
          }
          onClick={item.isCompleted ? handleRedoClick : handleDoneClick}
        >
          {item.isCompleted ? "Redo" : "Done"}
        </button>
      </div>
      <p className="todo-item-text">{item.text}</p>
    </div>
  );
};
