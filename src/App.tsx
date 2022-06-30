import React from "react";
import { TodoForm } from "./components/todoForm/TodoForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoForm />
      </header>
    </div>
  );
}

export default App;
