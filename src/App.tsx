import "./styles.css";
import { useState, useCallback, useReducer } from "react";
import { UseRefEx } from "./components/index";
import ReactMemoEx from "./components/reactMemoEx";
import UseCallbackEx from "./components/useCallbackEx";
import UseMemoEx from "./components/useMemoEx";
import UseReducerEx from "./components/useReducerEx";
import JobsList from "./components/JobList";
import UseImperativeHandleEx from "./components/useImperativeHandle";
const initState = 0;

// ex 1 of useReducer
const DOWN_ACTION = "down";
const UP_ACTION = "up";

const reducer = (state: any, action: any) => {
  // console.log("reducer runing...");
  switch (action) {
    case UP_ACTION:
      return state + 1;
    case DOWN_ACTION:
      return state - 1;
    default:
      throw new Error("Invalid action");
  }
};

export default function App() {
  const [count, setCount] = useState(0);

  const [count1, dispatch] = useReducer(reducer, initState);

  // useCallback ex
  const handleIncrease = useCallback(() => {
    setCount((prevCount: number) => prevCount + 1);
  }, []);

  // useReducer ex 1
  const handleCountUp = () => dispatch(UP_ACTION);
  const handleCountDown = () => dispatch(DOWN_ACTION);

  return (
    <div className="App">
      <h1>M.T example</h1>
      <p>Ex: useRef, React.memo, useMemo, useCallback, useReducer,...</p>
      <ReactMemoEx />
      <UseRefEx />
      <UseCallbackEx onClick={handleIncrease} />
      <p>{count}</p>
      <UseMemoEx />
      <UseReducerEx
        count={count1}
        onCountDown={handleCountDown}
        onCountUp={handleCountUp}
      />
      <JobsList />
      <UseImperativeHandleEx />
    </div>
  );
}
