import "./TodoListItem.css";

interface ListItemProps {
  itemText: string;
}

export const TodoListItem = ({ itemText }: ListItemProps) => {
  return (
    <div className="todo-item-container">
      <div className="todo-item-btn-group">
        <button className="todo-item-remove-btn">Remove</button>
        <button className="todo-item-done-btn">Done</button>
      </div>
      <p className="todo-item-text">{itemText}</p>
    </div>
  );
};
