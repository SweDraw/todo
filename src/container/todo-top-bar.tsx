import {connect} from "react-redux";
import {addTodo, setTodoFilter} from "../actions/todo";
import TodoTopBar, {TodoTopBarProps} from "../component/todo-top-bar";

const mapDispatchToProps = {
  setFilter: setTodoFilter,
  addTodo
};

type Dispatch = typeof mapDispatchToProps;
export type TodoTopBarReduxProps = Dispatch & TodoTopBarProps;

export default connect<undefined, Dispatch, TodoTopBarProps>(undefined, mapDispatchToProps)(TodoTopBar);