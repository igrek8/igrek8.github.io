import React from "react";
import { useIntl } from "react-intl";
import { useHistory, useLocation, useParams } from "react-router-dom";

import css from "./LanguageSwitch.module.css";
import { useLocale } from "./LocaleProvider";

export const LanguageSwitch = () => {
  const intl = useIntl();
  const { push: redirect } = useHistory();
  const { lang } = useParams();
  const { search } = useLocation();
  const { locales } = useLocale();

  const onChange = (event) => {
    const { value: lang } = event.target;
    redirect(lang + search);
  };

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
