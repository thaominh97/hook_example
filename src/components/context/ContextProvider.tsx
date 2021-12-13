import { useReducer } from "react";
import Context from "./Context";
import { reducerJobs, initJobState } from "../JobList/reducerJobs";
import { logger } from "../JobList/logger";

const ContextProvider = ({ children }: { children: any }) => {
  const [state, dispatch] = useReducer(logger(reducerJobs), initJobState);

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export default ContextProvider;
