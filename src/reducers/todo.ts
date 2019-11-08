import {Reducer} from "redux";
import {ADD_TODO, REMOVE_TODO, SET_TODO_FILTER, Todo, TodoKey} from "../types/todo";
import * as Actions from "../actions/todo";
import {ActionType} from "typesafe-actions";
import {addElementToArray, removeElementByKey} from "../utils/array";

export type TodoActionsType = ActionType<typeof Actions>;

export type TodoState = {
  todoList: Todo[];
  todoFilter: TodoKey;
};

export const INIT_STATE: TodoState = {
  todoFilter: '',
  todoList: []
};

const TodoReducer: Reducer<TodoState, TodoActionsType> = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const {todoList} = state;
      const {todo} = action.payload;
      return {
        ...state,
        todoList: addElementToArray<Todo>(todoList, todo)
      }
    }

    case REMOVE_TODO: {
      const {todoList} = state;
      const {key} = action.payload;
      return {
        ...state,
        todoList: removeElementByKey(todoList,key)//todoList.filter((todo) => todo.id !== key)
      }
    }

    case SET_TODO_FILTER: {
      const {key} = action.payload;
      return {
        ...state,
        todoFilter: key
      }
    }

    default:
      return state
  }
};

export default TodoReducer;