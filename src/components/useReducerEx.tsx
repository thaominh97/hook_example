import React from "react";

interface ChildrensType {
  count: number;
  onCountUp: any;
  onCountDown: any;
}

const UseReducerEx: React.FC<ChildrensType> = ({
  count,
  onCountDown,
  onCountUp
}) => {
  return (
    <>
      <h3>5. useReducer</h3>
      <p>
        - An alternative to useState. Accepts a reducer of type (state, action)
        {`=>`} newState, and returns the current state paired with a dispatch
        method.
        <br />
        - useReducer is usually preferable to useState when you have complex
        state logic that involves multiple sub-values or when the next state
        depends on the previous one.
        <br />
        useState and useReducer are different:
        <br />- useState: init state {`>`} action.
        <br />- useReducer: init state {`>`} action {`>`} reducer {`>`}{" "}
        dispatch.
        <br />
        Ex1:
        <br />
        {count}
      </p>
      <button onClick={onCountUp}>Up</button>
      <button onClick={onCountDown}>Down</button>
    </>
  );
};
export default React.memo(UseReducerEx);
