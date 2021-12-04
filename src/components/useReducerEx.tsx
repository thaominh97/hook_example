import React from "react";

const UseReducerEx: React.FC = () => {
  return (
    <>
      <h3>5. useReducer</h3>
      <p>
        - An alternative to useState. Accepts a reducer of type (state, action)
        => newState, and returns the current state paired with a dispatch
        method.
        <br />
        - useReducer is usually preferable to useState when you have complex
        state logic that involves multiple sub-values or when the next state
        depends on the previous one.
        <br />
      </p>
    </>
  );
};
export default React.memo(UseReducerEx);
