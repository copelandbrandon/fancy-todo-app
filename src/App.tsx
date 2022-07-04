import React from "react";
import { TodoForm } from "./components/todoForm/TodoForm";
import { TodoList } from "./components/todoList/TodoList";
import { Background } from "./components/background/Background";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Background />
        <TodoForm />
        <TodoList />
      </header>
    </div>
  );
}

export default App;
