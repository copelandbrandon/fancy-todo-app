import React from "react";
import { TodoForm } from "./components/todoForm/TodoForm";
import { TodoList } from "./components/todoList/TodoList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoForm />
        <TodoList />
      </header>
    </div>
  );
}

export default App;
