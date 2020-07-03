import React from "react";
import Helmet from "react-helmet";

import card from "../assets/card.png";
import darkThemeAndroidChrome_192x192 from "./dark/android-chrome-192x192.png";
import darkThemeAndroidChrome_512x512 from "./dark/android-chrome-512x512.png";
import darkThemeAppleTouchIcon from "./dark/apple-touch-icon.png";
import darkThemeFavicon_16x16 from "./dark/favicon-16x16.png";
import darkThemeFavicon_32x32 from "./dark/favicon-32x32.png";
import darkThemeFavicon from "./dark/favicon.ico";
import darkThemeSiteManifest from "./dark/site.webmanifest";

import lightThemeAndroidChrome_192x192 from "./light/android-chrome-192x192.png";
import lightThemeAndroidChrome_512x512 from "./light/android-chrome-512x512.png";
import lightThemeAppleTouchIcon from "./light/apple-touch-icon.png";
import lightThemeFavicon_16x16 from "./light/favicon-16x16.png";
import lightThemeFavicon_32x32 from "./light/favicon-32x32.png";
import lightThemeFavicon from "./light/favicon.ico";
import lightThemeSiteManifest from "./light/site.webmanifest";
import { useIntl } from "react-intl";
import { useTheme } from "../ThemeProvider";

const themes = {
  light: {
    appleTouchIcon: lightThemeAppleTouchIcon,
    favicon_32x32: lightThemeFavicon_32x32,
    favicon_16x16: lightThemeFavicon_16x16,
    favicon: lightThemeFavicon,
    siteManifest: lightThemeSiteManifest,
    androidChrome_192x192: lightThemeAndroidChrome_192x192,
    androidChrome_512x512: lightThemeAndroidChrome_512x512,
  },
  dark: {
    appleTouchIcon: darkThemeAppleTouchIcon,
    favicon_32x32: darkThemeFavicon_32x32,
    favicon_16x16: darkThemeFavicon_16x16,
    favicon: darkThemeFavicon,
    siteManifest: darkThemeSiteManifest,
    androidChrome_192x192: darkThemeAndroidChrome_192x192,
    androidChrome_512x512: darkThemeAndroidChrome_512x512,
  },
};

export const ThemeMeta = ({ children }) => {
  const intl = useIntl();
  const { theme } = useTheme();
  const assets = themes[theme.id];

  const manifest = {
    name: intl.formatMessage({ id: "app.title" }),
    short_name: intl.formatMessage({ id: "app.title" }),
    icons: [
      {
        src: assets.androidChrome_192x192,
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: assets.androidChrome_512x512,
        sizes: "512x512",
        type: "image/png",
      },
    ],
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
        href={assets.appleTouchIcon}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={assets.favicon_32x32}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={assets.favicon_16x16}
      />
      <link rel="manifest" href={manifestURL} />
      <link rel="shortcut icon" href={assets.favicon} type="image/x-icon" />
      <meta name="theme-color" content={theme.themeColor} />

      <meta name="title" content={intl.formatMessage({ id: "app.title" })} />
      <meta
        name="description"
        content={intl.formatMessage(
          { id: "app.description" },
          { years: new Date().getFullYear() - new Date("2015").getFullYear() }
        )}
      />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={window.location.origin} />
      <meta
        property="og:title"
        content={intl.formatMessage({ id: "app.title" })}
      />
      <meta
        property="og:description"
        content={intl.formatMessage(
          { id: "app.description" },
          { years: new Date().getFullYear() - new Date("2015").getFullYear() }
        )}
      />
      <meta property="og:image" content={card} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={window.location.origin} />
      <meta
        property="twitter:title"
        content={intl.formatMessage({ id: "app.title" })}
      />
      <meta
        property="twitter:description"
        content={intl.formatMessage(
          { id: "app.description" },
          { years: new Date().getFullYear() - new Date("2015").getFullYear() }
        )}
      />
      <meta property="twitter:image" content={card} />

      {children}
    </Helmet>
  );
};
