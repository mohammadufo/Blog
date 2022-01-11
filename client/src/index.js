import React from "react";
import { render } from "react-dom";
import { ContextProvider } from "./context/Context";
import App from "./App";

render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById("root")
);
