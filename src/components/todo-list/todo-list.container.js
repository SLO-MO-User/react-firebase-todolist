import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { updateTodoItem, removeTodoItem } from '../../redux/todo/todo.actions';
import { selectTodos } from '../../redux/todo/todo.selectors';
import { selectIsNightMode } from '../../redux/night-mode/night-mode.selectors';

import TodoList from './todo-list';

const mapStateToProps = createStructuredSelector({
  todos: selectTodos,
  isNightMode: selectIsNightMode,
});

const mapDispatchToProps = dispatch => ({
  updateTodoItem: item => dispatch(updateTodoItem(item)),
  removeTodoItem: uid => dispatch(removeTodoItem(uid)),
});

const TodoListContainer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(TodoList);

export default TodoListContainer;
