import React, {FC} from "react";
import Filter from "./filter";
import {TodoTopBarReduxProps} from "../container/todo-top-bar";
import HideComponent from "./hide-component";
import TodoCreateForm from "../container/todo-form";

export type TodoTopBarProps = {

}

const TodoTopBar: FC<TodoTopBarReduxProps> = ({setFilter}) => {

  return (
    <section className="top-bar">
      <HideComponent WrappedComponent={<TodoCreateForm />}/>
      <Filter updateFilter={setFilter}/>
    </section>
  )
};

export default TodoTopBar;