import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addTodoItem } from '../../redux/todo/todo.actions';

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

  const onAddButtonClick = () => {
    addTodoItem(todo);
    setTodo(todoInitial);
  };

  return (
    <div className='input-group mb-3'>
      <input
        type='text'
        className='form-control'
        placeholder='Work hard not smart'
        value={todo.taskName}
        onChange={onInputChange}
      />
      <div className='input-group-append'>
        <button
          className='btn btn-outline-secondary'
          type='button'
          onClick={onAddButtonClick}
        >
          <i className='fa fa-plus'></i>
        </button>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  addTodoItem: item => dispatch(addTodoItem(item)),
});

export default connect(
  null,
  mapDispatchToProps
)(AddTodo);
