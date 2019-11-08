import React, {FC, useState} from "react";
import uniqid from 'uniqid';
import {TodoCreateFormReduxProps} from "../container/todo-create-form";


export type TodoCreateFormProps = {
  className?: string;
}

const TodoCreateForm: FC<TodoCreateFormReduxProps> = ({addTodo, className}) => {
  const [task, setTask] = useState('');

  const clean = () => {
    setTask('');
  };

  return (
    <form
      className={`todo-create-form ${className}`}
      onSubmit={(e) => {
        e.preventDefault();
        addTodo({
          id: uniqid(),
          task
        });
        clean();
      }}
    >
      <input
        type="text"
        name="task"
        className="todo-create-form__field"
        value={task}
        placeholder="Todo task"
        onChange={(e) => setTask(e.target.value)}
      />

      <button type="submit">Add todo</button>
    </form>
  )
};

export default TodoCreateForm;