// * Lib
import React, {useContext} from "react";
// * Component
import TodoList from "../container/todo-list";
import TodoTopBar from "../container/todo-top-bar";
import {ThemeContext} from "../context/theme";

const App = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <section className={theme}>
      <TodoTopBar />
      <TodoList/>
    </section>
  )
};

export default App;