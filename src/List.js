import React from "react";
import css from "./List.module.css";

export const List = ({ children, component: Component = "ul" }) => {
  return <Component className={css.list}>{children}</Component>;
};
