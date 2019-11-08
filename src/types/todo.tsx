export type TodoKey = string;

export type TodoParameter = {
  task: string;
};

export type Todo = TodoParameter & {
  id: TodoKey;
}

export const ADD_TODO = '@TODO/ADD_TODO';
export const REMOVE_TODO = '@TODO/REMOVE_TODO';
export const SET_TODO_FILTER = '@TODO/SET_TODO_FILTER';