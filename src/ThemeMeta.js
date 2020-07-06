import React from "react";
import Helmet from "react-helmet";
import { useIntl } from "react-intl";

import { useTheme } from "./ThemeProvider";

export const ThemeMeta = ({ children }) => {
  const intl = useIntl();
  const { theme } = useTheme();

  const manifest = {
    name: intl.formatMessage({ id: "app.title" }),
    short_name: intl.formatMessage({ id: "app.title" }),
    icons: [
      {
        src: theme.androidChrome_192x192,
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: theme.androidChrome_512x512,
        sizes: "512x512",
        type: "image/png",
      },
    ],
    start_url: window.location.origin,
    theme_color: theme.themeColor,
    background_color: theme.backgroundColor,
    display: "standalone",
  };

  const stringManifest = JSON.stringify(manifest);
  const blob = new Blob([stringManifest], { type: "application/json" });
  const manifestURL = URL.createObjectURL(blob);

  return (
    <Helmet>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={theme.appleTouchIcon}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={theme.favicon_32x32}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={theme.favicon_16x16}
      />
      <link rel="manifest" href={manifestURL} />
      <link rel="shortcut icon" href={theme.favicon} type="image/x-icon" />
      <meta name="theme-color" content={theme.themeColor} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content={theme.safariColor}
      />
      <meta name="msapplication-navbutton-color" content={theme.themeColor} />
      {children}
    </Helmet>
  );
};
