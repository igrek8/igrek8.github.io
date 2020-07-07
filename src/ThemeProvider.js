import qs from "querystring";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import darkThemeAndroidChrome_192x192 from "./themes/dark/android-chrome-192x192.png";
import darkThemeAndroidChrome_512x512 from "./themes/dark/android-chrome-512x512.png";
import darkThemeAppleTouchIcon from "./themes/dark/apple-touch-icon.png";
import darkThemeFavicon_16x16 from "./themes/dark/favicon-16x16.png";
import darkThemeFavicon_32x32 from "./themes/dark/favicon-32x32.png";
import darkThemeFavicon from "./themes/dark/favicon.ico";
import lightThemeAndroidChrome_192x192 from "./themes/light/android-chrome-192x192.png";
import lightThemeAndroidChrome_512x512 from "./themes/light/android-chrome-512x512.png";
import lightThemeAppleTouchIcon from "./themes/light/apple-touch-icon.png";
import lightThemeFavicon_16x16 from "./themes/light/favicon-16x16.png";
import lightThemeFavicon_32x32 from "./themes/light/favicon-32x32.png";
import lightThemeFavicon from "./themes/light/favicon.ico";

const themes = {
  light: {
    id: "light",
    themeColor: "#ffffff",
    backgroundColor: "#007acc",
    appleTouchIcon: lightThemeAppleTouchIcon,
    favicon_32x32: lightThemeFavicon_32x32,
    favicon_16x16: lightThemeFavicon_16x16,
    favicon: lightThemeFavicon,
    androidChrome_192x192: lightThemeAndroidChrome_192x192,
    androidChrome_512x512: lightThemeAndroidChrome_512x512,
    safariColor: "default",
  },
  dark: {
    id: "dark",
    themeColor: "#323330",
    backgroundColor: "#f0db4f",
    appleTouchIcon: darkThemeAppleTouchIcon,
    favicon_32x32: darkThemeFavicon_32x32,
    favicon_16x16: darkThemeFavicon_16x16,
    favicon: darkThemeFavicon,
    androidChrome_192x192: darkThemeAndroidChrome_192x192,
    androidChrome_512x512: darkThemeAndroidChrome_512x512,
    safariColor: "black",
  },
};

const localStorageKey = "theme";
const themeCssClass = "theme-";

function parseSearch() {
  const search = window.location.hash.split("?").slice(1).join("?");
  return qs.parse(search);
}

function applyTheme(themeId) {
  document.body.classList.add(themeCssClass + themeId);
  const bodyStyles = { transition: "background var(--animation)" };
  requestAnimationFrame(() => Object.assign(document.body.style, bodyStyles));
  localStorage.setItem(localStorageKey, themeId);
}

function getDefaultThemeId() {
  const { theme: requestedThemeId } = parseSearch();
  if (requestedThemeId in themes) return requestedThemeId;
  const storedThemeId = localStorage.getItem(localStorageKey);
  if (storedThemeId in themes) return storedThemeId;
  return themes.light.id;
}

const defaultThemeId = getDefaultThemeId();

applyTheme(defaultThemeId);

const ThemeContext = React.createContext(null);

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const { push } = useHistory();
  const [theme, setTheme] = useState(() => themes[defaultThemeId]);

  useEffect(() => {
    const classes = document.body.classList;
    classes.remove(themeCssClass + themes.light.id);
    classes.remove(themeCssClass + themes.dark.id);
    classes.add(themeCssClass + theme.id);
    localStorage.setItem(localStorageKey, theme.id);
    push("?theme=" + theme.id);
  }, [theme, push]);

  const toggleTheme = () => {
    setTheme(theme === themes.light ? themes.dark : themes.light);
  };

  return (
    <ThemeContext.Provider value={{ theme, themes, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
