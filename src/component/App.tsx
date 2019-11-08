import React from "react";
import TodoList from "../container/todo-list";
import TodoTopBar from "../container/todo-top-bar";

const App = () => {
  return (
    <>
      <TodoTopBar />
      <TodoList/>
    </>
  )
};

export default App;