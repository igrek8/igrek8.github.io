import cn from "classnames";
import React from "react";

import css from "./Container.module.css";

export const Container = ({
  component: Component = "div",
  children,
  className,
  ...props
}) => {
  return (
    <Component className={cn(css.container, className)} {...props}>
      {children}
    </Component>
  );
};
