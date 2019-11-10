// * Lib
import React, {FC} from "react";
import ID from 'uniqid';
// * Component
import Filter from "./filter";
import HideComponent from "./hide-component";
import TodoCreateForm from "../container/todo-form";
// * Types
import {TodoParameter} from "../types/todo";
import {TodoTopBarReduxProps} from "../container/todo-top-bar";

export type TodoTopBarProps = {};

const TodoTopBar: FC<TodoTopBarReduxProps> = ({setFilter, addTodo}) => {
  // ! Add todo function from form
  const AddTodo = (todoParameter: TodoParameter, ) => {
    addTodo({
      id: ID(),
      ...todoParameter
    })
  };

  return (
    <section className="top-bar">
      <HideComponent WrappedComponent={<TodoCreateForm onSubmit={AddTodo}/>}/>
      <Filter updateFilter={setFilter}/>
    </section>
  )
};

export default TodoTopBar;