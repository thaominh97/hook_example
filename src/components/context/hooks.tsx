import { useContext } from "react";
import MyContext from "./Context";

export const useStore = () => {
  const [state, dispatch] = useContext(MyContext);

  return [state, dispatch];
};
