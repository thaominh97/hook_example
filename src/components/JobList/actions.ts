import { SET_JOB, ADD_JOB, REMOVE_JOB } from "./const";

export const setJob = (payload: string) => {
  return {
    type: SET_JOB,
    payload
  };
};
export const addJob = (payload: string) => {
  return {
    type: ADD_JOB,
    payload
  };
};
export const removeJob = (payload: string) => {
  return {
    type: REMOVE_JOB,
    payload
  };
};
