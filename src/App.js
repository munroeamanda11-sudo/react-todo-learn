import React, { useState } from "react";
import TodoItem from "./TodoItem";
import "./App.css";

// Main App component
function App() {
  // State for the list of todos
  const [todos, setTodos] = useState([]);
  // State for the new todo input
  const [newTodo, setNewTodo] = useState("");

  // Add a new todo
  const handleAddTodo = () => {
    if (newTodo.trim() === "") return;
    setTodos([
      ...todos,
      { text: newTodo, completed: false, id: Date.now() }
    ]);
    setNewTodo("");
  };

  // Toggle a todo's completed status
  const handleToggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Remove a todo
  const handleRemoveTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="app-container">
      <h1>React Todo List</h1>
      <div className="input-section">
        <input
          type="text"
          value={newTodo}
          onChange={e => setNewTodo(e.target.value)}
          placeholder="Enter a new todo..."
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <ul className="todo-list">
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={() => handleToggleTodo(todo.id)}
            onRemove={() => handleRemoveTodo(todo.id)}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;