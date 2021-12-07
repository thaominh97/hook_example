import { SET_JOB, ADD_JOB, REMOVE_JOB } from "./const";

export const initJobState = {
  job: "",
  jobs: []
};

export const reducerJobs = (state: any, action: any) => {
  // console.log("reducerJob runing...");
  switch (action.type) {
    case SET_JOB:
      return {
        ...state,
        job: action.payload
      };
    case ADD_JOB:
      return {
        ...state,
        jobs: [...state.jobs, action.payload]
      };
    case REMOVE_JOB:
      const newJobs = [...state.jobs];

      newJobs.splice(action.payload, 1);
      return {
        ...state,
        jobs: newJobs
      };
    default:
      throw new Error("Invalid action");
  }
};
