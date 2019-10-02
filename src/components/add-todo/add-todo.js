import React, { useState } from 'react';

const todoInitial = {
  uid: '',
  taskName: '',
  completed: false,
};

function AddTodo({ addTodoItem }) {
  const [todo, setTodo] = useState(todoInitial);

  const onInputChange = e => {
    setTodo({ ...todo, taskName: e.target.value });
  };

  const onFormSubmit = e => {
    e.preventDefault();
    addTodoItem(todo);
    setTodo(todoInitial);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div className='input-group mb-3 mt-3'>
        <input
          type='text'
          className='form-control'
          placeholder='Work hard not smart'
          value={todo.taskName}
          onChange={onInputChange}
        />
        <div className='input-group-append'>
          <button className='btn btn-outline-secondary' type='submit'>
            <i className='fa fa-plus'></i>
          </button>
        </div>
      </div>
    </form>
  );
}

export default AddTodo;
