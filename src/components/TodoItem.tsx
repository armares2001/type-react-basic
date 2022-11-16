import React, { FC, useContext } from "react";
import Todo from "../models/todo";
import { TodosContext } from "../store/todos-context";
import styles from "./css/TodoItem.module.css";

const TodoItem: FC<Todo> = ({ text, id }) => {
  const todosCtx = useContext(TodosContext);
  const deleteTodoHandler = () => {
    todosCtx.removeTodo(id);
  };

  return (
    <li onClick={deleteTodoHandler} className={styles.item}>
      Learn {text}
    </li>
  );
};

export default TodoItem;
