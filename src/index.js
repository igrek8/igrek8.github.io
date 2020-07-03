import "./Theme.css";
import "./GlobalStyles.css";

import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";

import App from "./App";
import { LocaleProvider } from "./LocaleProvider";
import * as serviceWorker from "./serviceWorker";
import { ThemeProvider } from "./ThemeProvider";

ReactDOM.render(
  <HashRouter basename="/">
    <ThemeProvider>
      <LocaleProvider>
        <Switch>
          <Route path="/:lang">
            <App />
          </Route>
          <Redirect to="/en" />
        </Switch>
      </LocaleProvider>
    </ThemeProvider>
  </HashRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
