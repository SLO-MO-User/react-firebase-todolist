import TodoActionTypes from './todo.types';

export const addTodoItem = item => ({
  type: TodoActionTypes.ADD_TODO,
  payload: item,
});

export const updateTodoItem = item => ({
  type: TodoActionTypes.UPDATE_TODO,
  payload: item,
});

export const removeTodoItem = uid => ({
  type: TodoActionTypes.REMOVE_TODO,
  payload: uid,
});
