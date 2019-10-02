import TodoActionTypes from './todo.types';

import { addTodo, updateTodo, removeTodo } from './todo.utils';

const INITIAL_STATE = {
  todos: [],
};

const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TodoActionTypes.ADD_TODO:
      return { ...state, todos: addTodo(state.todos, action.payload) };
    case TodoActionTypes.UPDATE_TODO:
      return { ...state, todos: updateTodo(state.todos, action.payload) };
    case TodoActionTypes.REMOVE_TODO:
      return { ...state, todos: removeTodo(state.todos, action.payload) };
    default:
      return state;
  }
};

export default todoReducer;
