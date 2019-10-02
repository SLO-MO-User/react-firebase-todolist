import uuid from 'uuid';

export const addTodo = (todos, item) => {
  return [...todos, { ...item, uid: uuid.v4() }];
};

export const updateTodo = (todos, item) => {
  return todos.map(todo => (todo.uid === item.uid ? item : todo));
};

export const removeTodo = (todos, uid) => {
  return todos.filter(todo => todo.uid !== uid);
};
