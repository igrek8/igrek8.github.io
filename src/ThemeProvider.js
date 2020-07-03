import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { useHistory } from "react-router-dom";

const themes = {
  light: {
    id: "light",
    themeColor: "#ffffff",
    backgroundColor: "#007acc",
  },
  dark: {
    id: "dark",
    themeColor: "#323330",
    backgroundColor: "#f0db4f",
  },
};

const ThemeContext = React.createContext(null);

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const history = useHistory();
  const [theme, _setTheme] = useState(() => themes[globalTheme]);

  const setTheme = (theme) => {
    const classes = document.body.classList;

    classes.remove("theme-" + themes.light.id);
    classes.remove("theme-" + themes.dark.id);
    classes.add("theme-" + theme.id);

    history.push("?theme=" + theme.id);
    localStorage.setItem("theme", theme.id);

    _setTheme(theme);
  };

  const toggleTheme = () => {
    setTheme(theme === themes.light ? themes.dark : themes.light);
  };

  return (
    <ThemeContext.Provider value={{ theme, themes, setTheme, toggleTheme }}>
      <Helmet>
        <meta
          name="theme-color"
          content={theme === themes.light.id ? "#ffffff" : "#323330"}
        />
      </Helmet>
      {children}
    </ThemeContext.Provider>
  );
};

// Globals

const classes = document.body.classList;
const persistedTheme = localStorage.getItem("theme");
const globalTheme = persistedTheme in themes ? persistedTheme : themes.light.id;

localStorage.setItem("theme", globalTheme);

classes.add("theme-" + globalTheme);

function enableAnimations() {
  document.body.style.transition = "background var(--animation)";
}

requestAnimationFrame(enableAnimations);
