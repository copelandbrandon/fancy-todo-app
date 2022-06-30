import "./TodoForm.css";

export const TodoForm = ({}) => {
  return (
    <form className="todo-form">
      <label className="todo-input-label">What's on your mind today?</label>
      <input className="todo-input" type="text"></input>
    </form>
  );
};
