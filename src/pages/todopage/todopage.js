import React, { useState } from 'react';
import uuid from 'uuid';
import AddTodo from '../../components/add-todo/add-todo';
import TodoList from '../../components/todo-list/todo-list';

const todoInitial = {
  uid: '',
  taskName: '',
  completed: false,
};

function TodoPage() {
  const [todo, setTodo] = useState(todoInitial);

  const [todos, setTodos] = useState([]);

  const onInputChange = e => {
    setTodo({ ...todo, taskName: e.target.value });
  };

  const onTodoItemAdd = () => {
    if (todo.taskName.length) {
      setTodos([...todos, { ...todo, uid: uuid.v4() }]);
      setTodo(todoInitial);
    }
  };

  const toggleComplete = uid => {
    const newTodos = todos.map(todo =>
      todo.uid === uid ? { ...todo, completed: !todo.completed } : { ...todo }
    );

    setTodos(newTodos);
  };

  const removeTodo = uid => {
    const newTodos = todos.filter(todo => todo.uid !== uid);
    setTodos(newTodos);
  };

  return (
    <div className='col-12 col-md-6 mx-auto p-5'>
      {todo.uid}
      {todo.taskName}
      <AddTodo
        onInputChange={onInputChange}
        onTodoItemAdd={onTodoItemAdd}
        taskName={todo.taskName}
      />
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        removeTodo={removeTodo}
      />
    </div>
  );
}

export default TodoPage;
