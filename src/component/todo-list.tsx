import React, {FC} from "react";
import TodoItem from "../container/todo-item";
import {useTransition} from "react-spring";
import {TodoListReduxProps} from '../container/todo-list';
import {Todo} from "../types/todo";

export type TodoListProps = {};

const TodoList: FC<TodoListReduxProps> = ({filter, list}) => {

  const todoList = list.filter((todo: Todo) => todo.task.indexOf(filter) !== -1);

  const transition = useTransition(todoList, (todo: Todo) => todo.id, {
    from: {opacity: 0},
    enter: {opacity: 1},
    leave: {opacity: 0}
  });

  const todoTransition = transition.map(({props, item: {id, task}}) => (
    <TodoItem id={id} style={props} key={id} task={task}/>)
  );

  return (
    <section className="todo-list">
      {todoTransition}
    </section>
  );
};

export default TodoList;