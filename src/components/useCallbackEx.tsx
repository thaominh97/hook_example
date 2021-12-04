import React from "react";

interface PropsType {
  onClick: any;
}

const UseCallbackEx: React.FC<PropsType> = ({ onClick }) => {
  console.log("re-render");

  return (
    <>
      <h3>3. useCallback:</h3>
      <p>
        - Returns a memoized callback.
        <br />
        - useCallback will return a memoized version of the callback that only
        changes if one of the dependencies has changed.
        <br />
        Ex:
      </p>
      <button onClick={onClick}>Increase</button>
    </>
  );
};

export default React.memo(UseCallbackEx);
