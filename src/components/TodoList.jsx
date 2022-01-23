import { TodoItem } from "./TodoItem";
import { useSelector } from "react-redux";

export const TodoList = () => {
  const state = useSelector((store) => store);

  return (
    <ul>
      {state.todos !== "" &&
        state.todos.map((todo, index) => (
          <TodoItem key={todo.id} todo={todo} index={index} />
        ))}
    </ul>
  );
};
