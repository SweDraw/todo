import {connect} from "react-redux";
import {setTodoFilter} from "../actions/todo";
import TodoTopBar, {TodoTopBarProps} from "../component/todo-top-bar";

const mapDispatchToProps = {
  setFilter: setTodoFilter
};

type Dispatch = typeof mapDispatchToProps;
export type TodoTopBarReduxProps = Dispatch & TodoTopBarProps;

export default connect<null, Dispatch, TodoTopBarProps>(undefined, mapDispatchToProps)(TodoTopBar);