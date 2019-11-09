import {combineReducers} from "redux";
import TodoReducer from "./todo";
import ThemeReducer from "./theme";

const RootReducer = combineReducers({
  todo: TodoReducer,
  theme: ThemeReducer
});

export type RootState = ReturnType<typeof RootReducer>;
export default RootReducer;