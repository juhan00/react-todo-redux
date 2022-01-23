import React, { useContext } from "react";
import { TodoItem } from "./TodoItem";
import { TodoContext } from "../container/Todo";

export const TodoList = () => {
  const { state } = useContext(TodoContext);

  return (
    <ul>
      {state.todos !== "" &&
        state.todos.map((todo, index) => (
          <TodoItem key={todo.id} todo={todo} index={index} />
        ))}
    </ul>
  );
};
