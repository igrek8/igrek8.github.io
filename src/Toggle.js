import React from "react";
import css from "./Toggle.module.css";
import { Icon } from "./Icon";
import { useIntl } from "react-intl";

export const Toggle = ({ checked, ...props }) => {
  const intl = useIntl();
  return (
    <label className={css.toggle}>
      <input
        {...props}
        checked={checked}
        type="checkbox"
        className={css.input}
      />
      <span className={css.text}> {intl.formatMessage({ id: "theme" })}</span>
      <Icon icon="contrast" />
    </label>
  );
};
