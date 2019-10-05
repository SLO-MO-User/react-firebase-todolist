import { all, call, takeLatest, select } from 'redux-saga/effects';

import { getUserTodosRef } from '../../firebase';

import TodoActionTypes from './todo.types';
import { selectTodos } from './todo.selectors';

// constant for now may add sign in later
const USER_ID = 'UECbXV49bNZVeehtgKCTEMUrKXM2';

export function* updateTodosInFirebase() {
  try {
    const todosRef = yield getUserTodosRef(USER_ID);
    const todos = yield select(selectTodos);
    yield todosRef.update({ todos });
  } catch (error) {
    console.log(error);
  }
}

export function* onTodosChange() {
  yield takeLatest(
    [
      TodoActionTypes.ADD_TODO,
      TodoActionTypes.UPDATE_TODO,
      TodoActionTypes.REMOVE_TODO,
    ],
    updateTodosInFirebase
  );
}

export function* todoSagas() {
  yield all([call(onTodosChange)]);
}
