import { useCallback, useReducer, useState } from "react";

import { produce } from "immer";
import { useImmer } from "use-immer";

function UserReducer_() {
  const [count, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <>
      <h1 className="display-3">User Reducer</h1>
      <h1 className="display-3">{count.count}</h1>

      <button className="m-1" onClick={() => dispatch({ type: "INC" })}>
        inc
      </button>
      <button className="m-1" onClick={() => dispatch({ type: "DEC" })}>
        dec
      </button>
    </>
  );
}

console.log(UserReducer_);

export default UserReducer_;

function reducer(state, action) {
  switch (action.type) {
    case "INC":
      return {
        count: ++state.count,
      };
    case "DEC":
      return {
        count: --state.count,
      };

    default:
      break;
  }
}
