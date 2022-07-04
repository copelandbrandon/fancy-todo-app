import React from "react";
import { TodoForm } from "./components/todoForm/TodoForm";
import { TodoList } from "./components/todoList/TodoList";
import { Background } from "./components/background/Background";
import { WeatherWidget } from "./components/weatherWidget/WeatherWidget";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Background />
        <WeatherWidget />
        <TodoForm />
        <TodoList />
      </header>
    </div>
  );
}

export default App;
