// * Lib
import {reduxForm, InjectedFormProps} from "redux-form";
// * Component
import TodoForm, {TodoFormProps} from "../component/todo-form";
// * Redux-form parameter
import {TodoParameter} from "../types/todo";

// * Add redux-form parameter
type ReduxFormProps = InjectedFormProps<TodoParameter> & TodoFormProps;
export type TodoFormReduxProps = ReduxFormProps

export default reduxForm<TodoParameter, TodoFormProps>({ form: 'todo-form'})(TodoForm);