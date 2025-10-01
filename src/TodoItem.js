import React from "react";

// Component for a single todo item
function TodoItem({ todo, onToggle, onRemove }) {
  return (
    <li className={`todo-item${todo.completed ? " completed" : ""}`}>  
      <span onClick={onToggle}>{todo.text}</span>
      <button className="remove-btn" onClick={onRemove}>Remove</button>
    </li>
  );
}

export default TodoItem;