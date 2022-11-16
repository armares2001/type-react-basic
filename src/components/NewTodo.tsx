import React, { FC, FormEvent, useContext, useRef } from "react";
import { TodosContext } from "../store/todos-context";
import styles from "./css/NewTodo.module.css";

const NewTodo: FC = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);
  const todosCtx = useContext(TodosContext);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    // console.log(e.currentTarget.TEXT_NODE);
    const enteredValue = textInputRef.current!.value;

    if (enteredValue.trim().length === 0) {
      return;
    }

    todosCtx.addTodo(enteredValue);
    console.log(enteredValue);
  };
  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <label htmlFor="text">Todo text</label>
      <input ref={textInputRef} type="text" id="text" />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
