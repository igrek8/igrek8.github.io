import React, { useCallback } from "react";
import { useIntl } from "react-intl";
import { useHistory, useParams, useLocation } from "react-router-dom";

import css from "./LanguageSwitch.module.css";
import { useLocale } from "./LocaleProvider";

export const LanguageSwitch = () => {
  const intl = useIntl();
  const { lang } = useParams();
  const { locales } = useLocale();
  const { push } = useHistory();
  const { search } = useLocation();

  const onChange = useCallback(
    (event) => {
      const { value: lang } = event.target;
      push({ pathname: lang, search });
    },
    [push, search]
  );

  return (
    <select className={css.select} onChange={onChange} value={lang}>
      {Object.values(locales).map((item) => (
        <option key={item.id} value={item.lang}>
          {intl.formatMessage({ id: "locales." + item.id })}
        </option>
      ))}
    </select>
  );
};
