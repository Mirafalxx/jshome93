import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router";
import { Provider } from "react-redux";
import history from "./history";
import App from "./App";
import { MuiThemeProvider } from "@material-ui/core";
import theme from "./theme";
const app = (
  <Router history={history}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Router>
);

ReactDOM.render(app, document.getElementById("root"));
