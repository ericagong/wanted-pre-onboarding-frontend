import { createContext } from "react";

const TodoContext = createContext({
  state: {
    todos: [],
  },
  actions: {
    getTodos: () => {},
    createTodo: () => {},
    updateTodo: () => {},
    deleteTodo: () => {},
  },
});

export default TodoContext;
