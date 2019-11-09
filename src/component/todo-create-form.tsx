import React, {FC, useState} from "react";
import ID from 'uniqid';

import CustomButton from "./custome-button";
import {TodoCreateFormReduxProps} from "../container/todo-create-form";

import '../style/todo-form.scss';

export type TodoCreateFormProps = {
  className?: string;
}

const TodoCreateForm: FC<TodoCreateFormReduxProps> = ({addTodo, className}) => {
  const [task, setTask] = useState('');

  // * Clean all field
  const clean = () => {
    setTask('');
  };
  // * Submit
  const handleSubmit = () => {
    addTodo({
      id: ID(),
      task,
    });
    clean();
  };

  return (
    <form
      className={`todo-create-form ${className}`}
      onSubmit={(e) => { e.preventDefault() }}
    >
      <section className="todo-create-form__input-section">
        <input
          type="text"
          name="task"
          className="todo-create-form__field"
          value={task}
          placeholder="Todo task"
          onChange={(e) => setTask(e.target.value)}
        />
      </section>

      <button
        type="submit"
        className="todo-create-form__submit"
      >
        Add todo
      </button>
      <CustomButton
        handleClick={() => handleSubmit()}
        buttonText="Add text"
      />
    </form>
  )
};

export default TodoCreateForm;