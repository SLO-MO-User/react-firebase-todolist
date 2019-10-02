import React from 'react';

function AddTodo({ onInputChange, onTodoItemAdd, taskName }) {
  return (
    <div className='input-group mb-3 mr-3'>
      <input
        type='text'
        className='form-control'
        placeholder='Do the math'
        value={taskName}
        onChange={onInputChange}
      />
      <div className='input-group-append'>
        <button
          className='btn btn-outline-secondary'
          type='button'
          onClick={onTodoItemAdd}
        >
          <i className='fa fa-plus'></i>
        </button>
      </div>
    </div>
  );
}

export default AddTodo;
