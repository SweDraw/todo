import {combineReducers} from "redux";
import {reducer} from "redux-form";
import TodoReducer from "./todo";

const RootReducer = combineReducers({
  todo: TodoReducer,
  form: reducer
});

export type RootState = ReturnType<typeof RootReducer>;
export default RootReducer;