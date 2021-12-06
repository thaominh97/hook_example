import "./styles.css";
import { useState, useCallback, useReducer, useRef } from "react";
import { UseRefEx } from "./components/index";
import ReactMemoEx from "./components/reactMemoEx";
import UseCallbackEx from "./components/useCallbackEx";
import UseMemoEx from "./components/useMemoEx";
import UseReducerEx from "./components/useReducerEx";

const initState = 0;
const initJobState = {
  job: "",
  jobs: []
};
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
// ex 2 of useReducer
const SET_JOB = "set_job";
const ADD_JOB = "add_job";
const REMOVE_JOB = "remove_job";

const setJob = (payload: string) => {
  return {
    type: SET_JOB,
    payload
  };
};
const addJob = (payload: string) => {
  return {
    type: ADD_JOB,
    payload
  };
};
const removeJob = (payload: string) => {
  return {
    type: REMOVE_JOB,
    payload
  };
};
const reducerJobs = (state: any, action: any) => {
  // console.log("reducerJob runing...");
  let newState;
  switch (action.type) {
    case SET_JOB:
      newState = {
        ...state,
        job: action.payload
      };
      break;
    case ADD_JOB:
      newState = {
        ...state,
        jobs: [...state.jobs, action.payload]
      };
      break;
    case REMOVE_JOB:
      const newJobs = [...state.jobs];

      newJobs.splice(action.payload, 1);
      newState = {
        ...state,
        jobs: newJobs
      };
      break;
    default:
      throw new Error("Invalid action");
  }
  // console.log(newState)
  return newState;
};

export default function App() {
  const [count, setCount] = useState(0);

  const [count1, dispatch] = useReducer(reducer, initState);

  const inputRef = useRef<HTMLInputElement>(null);

  const [jobState, dispatchJob] = useReducer(reducerJobs, initJobState);
  const { job, jobs } = jobState;
  // useCallback ex
  const handleIncrease = useCallback(() => {
    setCount((prevCount: number) => prevCount + 1);
  }, []);

  // useReducer ex 1
  const handleCountUp = () => dispatch(UP_ACTION);
  const handleCountDown = () => dispatch(DOWN_ACTION);
  //  useReducer ex 2
  const handleChangeJobs = (e: any) => {
    dispatchJob(setJob(e.target.value));
  };
  const handleSubmitJobs = () => {
    dispatchJob(addJob(job));
    dispatchJob(setJob(""));

    inputRef?.current?.focus();
  };
  const handleRemoveJob = () => {
    dispatchJob(removeJob(job));
  };
  return (
    <div className="App">
      <h1>M.T example</h1>
      <p>Ex: useRef, React.memo, useMemo, useCallback, useReducer</p>
      <ReactMemoEx />
      <UseRefEx />
      <UseCallbackEx onClick={handleIncrease} />
      <p>{count}</p>
      <UseMemoEx />
      <UseReducerEx
        count={count1}
        onCountDown={handleCountDown}
        onCountUp={handleCountUp}
        onChange={handleChangeJobs}
        onClick={handleSubmitJobs}
        job={job}
        jobs={jobs}
        ref={inputRef}
        onRemoveJob={handleRemoveJob}
      />
    </div>
  );
}
