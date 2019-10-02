import React from 'react';

import { default as AddTodo } from '../../components/add-todo/add-todo.container';
import { default as TodoList } from '../../components/todo-list/todo-list.container';

function TodoPage() {
  return (
    <div className='col-12 col-md-6 mx-auto'>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default TodoPage;
