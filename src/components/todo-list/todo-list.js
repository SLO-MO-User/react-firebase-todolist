import React from 'react';

function TodoList({ todos, updateTodoItem, removeTodoItem, isNightMode }) {
  const toggleComplete = todo => {
    let todoToUpdate = { ...todo, completed: !todo.completed };
    updateTodoItem(todoToUpdate);
  };

  return (
    <ul className='list-group list-group-flush'>
      {todos.map(todo => {
        const { uid, taskName, completed } = todo;
        return (
          <li
            key={uid}
            className={`list-group-item d-flex justify-content-between align-items-center border-bottom ${
              isNightMode ? 'bg-dark text-white' : ''
            }`}
          >
            <span
              className={`${completed ? 'line-through' : ''}`}
              onClick={() => toggleComplete(todo)}
            >
              {taskName}
            </span>
            <i
              className='fa fa-trash p-2'
              onClick={() => removeTodoItem(uid)}
            ></i>
          </li>
        );
      })}
    </ul>
  );
}

export default TodoList;
