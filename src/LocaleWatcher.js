import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useLocale } from "./LocaleProvider";

export const LocaleWatcher = ({ children }) => {
  const { lang } = useParams();
  const { locales, setLocale } = useLocale();

  useEffect(() => {
    const match = (locale) => locale.lang === lang;
    const locale = Object.values(locales).find(match);
    if (locale) setLocale(locale);
  }, [lang, locales, setLocale]);

  return <>{children}</>;
};
