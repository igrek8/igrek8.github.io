import React from "react";

import { Container } from "./Container";
import { SocialLinks } from "./SocialLinks";

import css from "./Footer.module.css";
import { useIntl } from "react-intl";

export const Footer = () => {
  const intl = useIntl();
  return (
    <Container component="footer">
      <SocialLinks className={css.footer}>
        <li className={css.text}>
          {intl.formatMessage({ id: "build" })} v{process.env.REACT_APP_VERSION}{" "}
          &copy; {new Date().getFullYear()}
        </li>
      </SocialLinks>
    </Container>
  );
};
