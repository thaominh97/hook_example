import ReactDOM from "react-dom";
import React from "react";
import ContextProvider from "../src/components/context/ContextProvider";

import App from "./App";

(async () => {
  ReactDOM.render(
    <React.StrictMode>
      <ContextProvider>
        <App />
      </ContextProvider>
    </React.StrictMode>,
    document.getElementById("root")
  );
})();
