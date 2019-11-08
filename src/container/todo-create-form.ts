import {connect} from "react-redux";
import {addTodo} from "../actions/todo";
import TodoCreateForm, {TodoCreateFormProps} from "../component/todo-create-form";

const mapDispatchToProps = {
  addTodo
};


type Dispatch = typeof mapDispatchToProps;
export type TodoCreateFormReduxProps = TodoCreateFormProps & Dispatch;

export default connect(undefined, mapDispatchToProps)(TodoCreateForm)