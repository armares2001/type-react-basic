import { FC, useContext } from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import styles from "./css/Todos.module.css";
import { TodosContext } from "../store/todos-context";

const Todos: FC = (props) => {
  const todosCtx = useContext(TodosContext);
  return (
    <ul className={styles.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem key={item.id} id={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
