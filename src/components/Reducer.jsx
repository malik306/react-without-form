import React, { useReducer } from "react";

function Reducer() {
    const [state, dispatch] = useReducer(reducer, { count: 0 });
    function reducer(state, action) {
        switch (action.type) {
          case "inc":
            return { count: state.count + 1 };
          case "dec":
            return { count: state.count - 1 };
          case "reset":
            return { count: (state.count = 0) };
          default:
            throw new Error();
        }
      }
  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <button onClick={() => dispatch({ type: "dec" })}>-</button>
      <button onClick={() => dispatch({ type: "inc" })}>+</button>
    </div>
  );
}

export default Reducer;
