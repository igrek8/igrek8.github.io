import React, { useContext, useState } from "react";
import { IntlProvider as ReactIntlProvider } from "react-intl";

import enGB from "./i18n/en-GB.json";
import ruRU from "./i18n/ru-RU.json";

const IntlContext = React.createContext(null);

export const useLocale = () => useContext(IntlContext);

const locales = {
  "en-GB": {
    id: "en-GB",
    lang: "en",
    messages: enGB,
  },
  "ru-RU": {
    id: "ru-RU",
    lang: "ru",
    messages: ruRU,
  },
};

function getLocale() {
  return (
    localStorage.getItem("locale") ??
    navigator.languages?.[0] ??
    navigator.language ??
    navigator.userLanguage ??
    locales["en-GB"]
  );
}

export const LocaleProvider = ({ children }) => {
  const [locale, setLocale] = useState(() => {
    return locales[getLocale()] ?? locales["en-GB"];
  });

  return (
    <IntlContext.Provider value={{ locale, locales, setLocale }}>
      <ReactIntlProvider
        locale={locale.lang}
        messages={locale.messages}
        wrapRichTextChunksInFragment
      >
        {children}
      </ReactIntlProvider>
    </IntlContext.Provider>
  );
};
