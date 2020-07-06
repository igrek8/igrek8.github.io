import React from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";

import App from "./App";
import { useLocale } from "./LocaleProvider";

export const Root = ({ children }) => {
  const { search } = useLocation();
  const { locales, defaultLocale } = useLocale();
  return (
    <Switch>
      {Object.entries(locales).map(([id, locale]) => (
        <Route key={id} path={"/" + locale.lang}>
          <App />
        </Route>
      ))}
      <Redirect exact from="/" to={{ pathname: defaultLocale.lang, search }} />
      <Redirect to={{ pathname: "/en", search }} />
    </Switch>
  );
};
