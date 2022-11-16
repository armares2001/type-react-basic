import React, {
  createContext,
  FC,
  Fragment,
  PropsWithChildren,
  useState,
} from "react";
import Todo from "../models/todo";

type TodoProperties = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};
export const TodosContext = createContext<TodoProperties>({
  items: [],
  addTodo: (text: string) => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC<PropsWithChildren> = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    setTodos((state) => {
      return [...state, new Todo(text)];
    });
  };

  const removeTodoHandler = (id: string) => {
    setTodos((state) => {
      return state.filter((el) => el.id !== id);
    });
  };
  const todosContextValue: TodoProperties = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={todosContextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
