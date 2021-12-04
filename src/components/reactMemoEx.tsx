import React from "react";

const ReactMemoEx: React.FC = () => {
  return (
    <>
      <h3>1. React.memo</h3>
      <p>
        - React.memo is a higher order component.
        <br />
        - React.memo only checks for prop changes.
        <br />- If your component renders the same result given the same props,
        you can wrap it in a call to React.memo for a performance boost in some
        cases by memoizing the result.
      </p>
    </>
  );
};
export default React.memo(ReactMemoEx);
