import { render } from "react-dom";
import ContextProvider from "../src/components/context/ContextProvider";

import App from "./App";

const rootElement = document.getElementById("root");
render(<App />, rootElement);
