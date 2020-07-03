import React from "react";
import css from "./Section.module.css";
import cn from "classnames";

export const Section = ({ children, className, ...props }) => {
  return (
    <section className={cn(css.section, className)} {...props}>
      {children}
    </section>
  );
};
