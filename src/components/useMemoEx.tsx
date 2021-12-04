import React from "react";

const UseMemoEx: React.FC = () => {
  return (
    <>
      <h3>4. useMemo</h3>
      <p>
        - Returns a memoized value.
        <br />
        - useMemo will only recompute the memoized value when one of the
        dependencies has changed.
        <br />
      </p>
    </>
  );
};
export default React.memo(UseMemoEx);
