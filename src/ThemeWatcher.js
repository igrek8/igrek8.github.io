import qs from "querystring";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { useTheme } from "./ThemeProvider";

export const ThemeWatcher = ({ children }) => {
  const { search } = useLocation();
  const { themes, setTheme } = useTheme();
  const { theme: themeId } = qs.parse(search.substr(1));

  useEffect(() => {
    const theme = themes[themeId];
    if (theme) setTheme(theme);
  }, [themeId, themes, setTheme]);

  return <>{children}</>;
};
