import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
//
//
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./Theme/Theme";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
