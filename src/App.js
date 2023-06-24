import React from "react";
import "./App.css";
import Input from "./components/Input";
import TodoList from "./components/TodoList";

function App() {
  /*This function returns the main component of the To Do List app.
    It includes the Input and TodoList components.*/
  return (
    <div className="App">
      <div className="todo">
        <h1>To Do List</h1>
        <Input />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
