import { useReducer } from "react";
import Context from "./Context";
import { reducerJobs, initJobState } from "../JobList/reducerJobs";
const ContextProvider = ({ children }: { children: any }) => {
  const [state, dispatch] = useReducer(reducerJobs, initJobState);

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export default ContextProvider;
