import { useRef } from "react";
import { setJob, addJob } from "../JobList/actions";
import { useStore } from "./hooks";

const ContextEx = () => {
  const [state, dispatch] = useStore();
  const { job, jobs } = state;
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChangeJobs = (e: any) => {
    dispatch(setJob(e.target.value));
  };

  const handleSubmitJobs = () => {
    dispatch(addJob(job));
    dispatch(setJob(""));

    inputRef?.current?.focus();
  };

  return (
    <>
      <h3>6. useContext </h3>
      <p>Ex: useContext and useReducer(same JobList ex) </p>
      <input
        placeholder="Enter your jobs..."
        onChange={handleChangeJobs}
        value={job}
        ref={inputRef}
      />
      <button onClick={handleSubmitJobs}>Add</button>
      <br />
      <ul>
        {jobs.map((job: string, index: number) => {
          return <li key={index}>{job}</li>;
        })}
      </ul>
    </>
  );
};

export default ContextEx;
