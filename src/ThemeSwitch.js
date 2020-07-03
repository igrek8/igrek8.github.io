import React from "react";

import { Toggle } from "./Toggle";
import { useTheme } from "./ThemeProvider";

export const ThemeSwitch = () => {
  const { theme, themes, toggleTheme } = useTheme();
  return <Toggle checked={theme === themes.light} onChange={toggleTheme} />;
};
