import React from "react";
import { Link as RouterLink } from "react-router-dom";
import cn from "classnames";
import css from "./Link.module.css";

export const Link = ({
  children,
  className,
  component: Component = RouterLink,
  ...props
}) => {
  return (
    <Component className={cn(css.link, className)} {...props}>
      {children}
    </Component>
  );
};
