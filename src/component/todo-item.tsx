import React, {CSSProperties} from 'react';
import {animated as a} from 'react-spring';
import {TodoProps} from "../container/todo-item";
import {FaTrashRestore} from "react-icons/all";
import {Todo} from "../types/todo";

export type TodoItemProps = Todo & {
  style: CSSProperties;
  className?: string;
}

const TodoItem = ({style, task, className, id, removeTodo}: TodoProps) => {
  return (
    <a.div
      className={`todo-item ${className}`}
      style = {style}
    >
      <span className="todo-item__task">{task}</span>
      <button
        className="todo-item__remove"
        onClick={() => removeTodo(id)}
      ><FaTrashRestore/></button>
    </a.div>
  )
};

export default TodoItem;