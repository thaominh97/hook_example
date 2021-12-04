import "./styles.css";
import { useState, useCallback } from "react";
import { UseRefEx } from "./components/index";
import ReactMemoEx from "./components/reactMemoEx";
import UseCallbackEx from "./components/useCallbackEx";
import UseMemoEx from "./components/useMemoEx";
export default function App() {
  const [count, setCount] = useState(0);
  const handleIncrease = useCallback(() => {
    setCount((prevCount: number) => prevCount + 1);
  }, []);

  return (
    <div className="App">
      <h1>M.T example</h1>
      <p>Ex: useRef, React.memo, useMemo, useCallback, useReducer</p>
      <ReactMemoEx />
      <UseRefEx />
      <UseCallbackEx onClick={handleIncrease} />
      <p>{count}</p>
      <UseMemoEx />
    </div>
  );
}
