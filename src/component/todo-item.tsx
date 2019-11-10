// * Lib
import React, {CSSProperties} from 'react';
import {animated as a} from 'react-spring';
// * Style
import '../style/todo-item.scss';
// * Types
import {TodoProps} from "../container/todo-item";
import {Todo} from "../types/todo";
export type TodoItemProps = Todo & {
  style: CSSProperties;
  className?: string;
}

const TodoItem = ({style, task, className = '', id, removeTodo}: TodoProps) => {
  return (
    <a.div
      className={`todo-item ${className}`}
      style = {style}
    >
      <button
        className="todo-item__remove"
        onClick={() => removeTodo(id)}
      />
      <span className="todo-item__task">{task}</span>
    </a.div>
  )
};

export default TodoItem;