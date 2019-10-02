import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { updateTodoItem, removeTodoItem } from '../../redux/todo/todo.actions';
import { selectTodos } from '../../redux/todo/todo.selectors';

function TodoList({ todos, updateTodoItem, removeTodoItem }) {
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
            className='list-group-item d-flex justify-content-between align-items-center border-bottom'
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

const mapStateToProps = createStructuredSelector({
  todos: selectTodos,
});

const mapDispatchToProps = dispatch => ({
  updateTodoItem: item => dispatch(updateTodoItem(item)),
  removeTodoItem: uid => dispatch(removeTodoItem(uid)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
