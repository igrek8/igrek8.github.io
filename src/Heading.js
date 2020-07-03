import React from "react";
import css from "./Heading.module.css";
import cn from "classnames";

export const Heading = ({ component: Component, className, ...props }) => {
  return <Component className={cn(css.heading, className)} {...props} />;
};
