import React from 'react';

import AddTodo from '../../components/add-todo/add-todo';
import TodoList from '../../components/todo-list/todo-list';

function TodoPage() {
  return (
    <div className='col-12 col-md-6 mx-auto p-3'>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default TodoPage;
