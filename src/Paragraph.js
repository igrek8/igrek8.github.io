import React from "react";
import css from "./Paragraph.module.css";
import cn from "classnames";

export const Paragraph = ({ className, children, ...props }) => {
  return (
    <p className={cn(css.paragraph, className)} {...props}>
      {children}
    </p>
  );
};
