import React from "react";

interface ChildrensType {
  count: number;
  job: string;
  jobs: string[];
  ref: any;
  onCountUp: any;
  onCountDown: any;
  onChange: any;
  onClick: any;
  onRemoveJob: any;
}

const UseReducerEx: React.FC<ChildrensType> = ({
  count,
  job,
  jobs,
  ref,
  onCountDown,
  onCountUp,
  onChange,
  onClick,
  onRemoveJob
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
      <br />
      <p>Ex2:</p>
      <p>Jobs list</p>
      <br />
      <input
        placeholder="Enter your jobs..."
        onChange={onChange}
        value={job}
        ref={ref}
      />
      <button onClick={onClick}>Add</button>
      <br />
      <ul>
        {jobs.map((job, index) => {
          const onRemove = onRemoveJob(job);
          return (
            <li key={index} onClick={onRemove}>
              {job}
            </li>
          );
        })}
      </ul>
      <br />
    </>
  );
};
export default React.memo(UseReducerEx);
