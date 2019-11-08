import {connect} from 'react-redux';
import TodoItem, {TodoItemProps} from "../component/todo-item";
import {removeTodo} from "../actions/todo";

const mapDispatchToProps = {
  removeTodo
};

type Dispatch = typeof  mapDispatchToProps;
export type TodoProps = TodoItemProps & Dispatch;

export default connect<null, Dispatch, TodoItemProps>(undefined, mapDispatchToProps)(TodoItem);