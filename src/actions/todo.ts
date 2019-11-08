import {action} from "typesafe-actions";
import {ADD_TODO, REMOVE_TODO, SET_TODO_FILTER, Todo, TodoKey} from "../types/todo";

export const addTodo = (todo: Todo) => action(ADD_TODO, {todo});
export const removeTodo = (key: TodoKey) => action(REMOVE_TODO, {key});
export const setTodoFilter = (key: TodoKey) => action(SET_TODO_FILTER, {key});