import {combineReducers} from "redux";
import TodoReducer from "./todo";

const RootReducer = combineReducers({
  todo: TodoReducer,
});

export type RootState = ReturnType<typeof RootReducer>;
export default RootReducer;