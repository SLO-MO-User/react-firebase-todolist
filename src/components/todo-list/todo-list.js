import React from 'react';

function TodoList({ todos, toggleComplete, removeTodo }) {
  return (
    <ul className='list-group list-group-flush mt-5'>
      {todos.map(todo => {
        const { uid, taskName, completed } = todo;
        return (
          <li
            key={uid}
            className='list-group-item d-flex justify-content-between align-items-center'
          >
            <span
              className={`${completed ? 'line-through' : ''}`}
              onClick={() => toggleComplete(uid)}
            >
              {taskName}
            </span>
            <i className='fa fa-trash p-2' onClick={() => removeTodo(uid)}></i>
          </li>
        );
      })}
    </ul>
  );
}

export default TodoList;
