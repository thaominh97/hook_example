import React, { useRef, useState } from "react";

export const UseRefEx: React.FC = () => {
  const [count, setCount] = useState(60);

  const timeId = useRef();

  const handleStart = () => {
    timeId.current = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);
  };
  const handleStop = () => {
    clearInterval(timeId.current);
  };

  return (
    <>
      <h3>2. useRef:</h3>
      <p>
        - It returns a mutable ref object whose .current property is initialized
        to the passed argument (initialValue).
        <br />
        - It’s handy for keeping any mutable value around similar to how you’d
        use instance fields in classes.
        <br />
        Ex:
      </p>
      <p>CountDown: {count} </p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </>
  );
};
