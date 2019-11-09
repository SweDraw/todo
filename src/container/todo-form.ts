import {connect} from "react-redux";
import {addTodo} from "../actions/todo";
import TodoForm, {TodoCreateFormProps} from "../component/todo-form";

const mapDispatchToProps = {
  addTodo
};


export type TodoCreateFormReduxProps =
  TodoCreateFormProps
  & typeof mapDispatchToProps;

export default connect(undefined, mapDispatchToProps)(TodoForm)