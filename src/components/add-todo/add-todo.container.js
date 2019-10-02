import { connect } from 'react-redux';
import { compose } from 'redux';

import { addTodoItem } from '../../redux/todo/todo.actions';

import AddTodo from './add-todo';

const mapDispatchToProps = dispatch => ({
  addTodoItem: item => dispatch(addTodoItem(item)),
});

const AddTodoContainer = compose(
  connect(
    null,
    mapDispatchToProps
  )
)(AddTodo);

export default AddTodoContainer;
