import "./GlobalStyles.css";
import "./Theme.css";

import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route } from "react-router-dom";

import App from "./App";
import { LocaleProvider } from "./LocaleProvider";
import { LocaleWatcher } from "./LocaleWatcher";
import { Root } from "./Root";
import * as serviceWorker from "./serviceWorker";
import { ThemeProvider } from "./ThemeProvider";
import { ThemeWatcher } from "./ThemeWatcher";

ReactDOM.render(
  <HashRouter basename="/">
    <ThemeProvider>
      <ThemeWatcher />
      <LocaleProvider>
        <Route path="/:lang">
          <LocaleWatcher />
        </Route>
        <Root>
          <App />
        </Root>
      </LocaleProvider>
    </ThemeProvider>
  </HashRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
