import React, { useReducer, useRef } from "react";
import { setJob, addJob, removeJob } from "./actions";
import { reducerJobs, initJobState } from "./reducerJobs";
import { logger } from "./logger";
const JobsList = () => {
  const [jobState, dispatch] = useReducer(logger(reducerJobs), initJobState);
  const { job, jobs } = jobState;

  const inputRef = useRef<HTMLInputElement>(null);

  const handleChangeJobs = (e: any) => {
    dispatch(setJob(e.target.value));
  };
  const handleSubmitJobs = () => {
    dispatch(addJob(job));
    dispatch(setJob(""));

    inputRef?.current?.focus();
  };
  const handleRemoveJob = () => {
    dispatch(removeJob(job));
  };
  return (
    <>
      <p>
        Ex 2(useReducer)
        <br />
        Jobs List
      </p>
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
          return (
            <li key={index} onClick={handleRemoveJob}>
              {job}
            </li>
          );
        })}
      </ul>
      <br />
    </>
  );
};

export default React.memo(JobsList);
