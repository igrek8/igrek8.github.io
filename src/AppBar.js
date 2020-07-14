import cn from "classnames";
import React from "react";
import { useIntl } from "react-intl";
import { Route } from "react-router-dom";

import css from "./AppBar.module.css";
import { Container } from "./Container";
import { Icon } from "./Icon";
import { LanguageSwitch } from "./LanguageSwitch";
import { ThemeSwitch } from "./ThemeSwitch";

export const AppBar = () => {
  const intl = useIntl();
  return (
    <Container component="header" className={css.header}>
      <nav className={css.nav}>
        <ul className={css.list}>
          <li className={cn(css.listItem)}>
            <Route path="/:lang">
              <LanguageSwitch />
            </Route>
          </li>
          <li className={cn(css.listItem, css.pushRight)}>
            <a
              className={css.button}
              href="mailto:i.korchagin@async.fun"
              title={intl.formatMessage({ id: "email" })}
            >
              <Icon icon="mail" className={css.buttonIcon} />
              <span>{intl.formatMessage({ id: "email" })}</span>
            </a>
          </li>
          <li className={cn(css.listItem)}>
            <ThemeSwitch />
          </li>
        </ul>
      </nav>
    </Container>
  );
};
