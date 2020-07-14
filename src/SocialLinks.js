import cn from "classnames";
import React from "react";

import { Icon } from "./Icon";
import css from "./SocialLinks.module.css";

const socialLinks = [
  { link: "https://telegram.me/igrek8/", id: "telegram", title: "Telegram" },
  { link: "https://github.com/igrek8/", id: "github", title: "GitHub" },
  {
    link: "https://linkedin.com/in/ikorchagin/",
    id: "linkedin",
    title: "LinkedIn",
  },
];

export const SocialLinks = ({ className, children }) => {
  return (
    <ul className={cn(css.list, className)}>
      {socialLinks.map((link) => (
        <li key={link.id} className={css.listItem}>
          <a
            href={link.link}
            className={css.link}
            title={link.title}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon={link.id} className={css.icon}></Icon>
          </a>
        </li>
      ))}
      {children}
    </ul>
  );
};
