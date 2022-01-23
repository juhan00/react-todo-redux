import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export const TodoInput = () => {
  const dispatch = useDispatch();
  const state = useSelector((store) => store);

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
