import React, { useContext } from "react";
import { TodoContext } from "../container/Todo";

export const TodoInput = () => {
  const { state, dispatch } = useContext(TodoContext);

  return (
    <div>
      <input
        type="text"
        value={state.inputText}
        onChange={(event) => {
          dispatch({ type: "ON_CHANGE_INPUT_TEXT", event });
        }}
      />
      <button
        onClick={() => {
          dispatch({ type: "ADD_TODO" });
        }}
      >
        등록
      </button>
    </div>
  );
};
