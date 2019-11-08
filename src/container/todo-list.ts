import {connect} from "react-redux";
import {RootState} from "../reducers";
import TodoList, {TodoListProps} from "../component/todo-list";

const mapStateToProps = (state: RootState) => {
  const {todoFilter, todoList} = state.todo;
  return {
    list: todoList,
    filter: todoFilter
  };
};

type State = ReturnType<typeof mapStateToProps>;
export type TodoListReduxProps = TodoListProps & State;

// @ts-ignore
export default connect<State, null, TodoListProps>(mapStateToProps)(TodoList);