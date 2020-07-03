import cn from "classnames";
import qs from "qs";
import React, { useEffect } from "react";
import { useIntl } from "react-intl";
import { useHistory, useLocation, useParams } from "react-router-dom";

import css from "./App.module.css";
import { AppBar } from "./AppBar";
import { Container } from "./Container";
import { Footer } from "./Footer";
import { Heading } from "./Heading";
import { Icon } from "./Icon";
import { Link } from "./Link";
import { List } from "./List";
import { useLocale } from "./LocaleProvider";
import { Paragraph } from "./Paragraph";
import { Section } from "./Section";
import { ThemeMeta } from "./theme/LightTheme";
import { useTheme } from "./ThemeProvider";

const createLink = (href) => (text) => (
  <Link component="a" href={href} target="_blank" rel="noopener noreferrer">
    {text}
  </Link>
);

const br = () => <br />;

const mark = (text) => <mark>{text}</mark>;

function App() {
  const intl = useIntl();
  const { themes, setTheme } = useTheme();
  const { locales, setLocale } = useLocale();
  const { lang } = useParams();
  const { push: redirect } = useHistory();
  const { search } = useLocation();

  const { theme: themeId } = qs.parse(search, {
    ignoreQueryPrefix: true,
  });

  useEffect(() => {
    const matchLang = (locale) => locale.lang === lang;
    const locale = Object.values(locales).find(matchLang);
    if (locale) return setLocale(locale);
    return redirect("/");
  }, [redirect, lang, locales, setLocale]);

  useEffect(() => {
    const theme = themes[themeId];
    if (theme) setTheme(theme);
  }, [themeId, themes, setTheme]);

  return (
    <>
      <ThemeMeta>
        <title>{intl.formatMessage({ id: "page" })}</title>
      </ThemeMeta>
      <AppBar />
      <Container component="main" className={cn(css.main)}>
        <Section>
          <Heading component="h1">
            {intl.formatMessage({ id: "sections.hello.title" })}
          </Heading>
          <Paragraph>
            {intl.formatMessage({ id: "sections.hello.text" }, { br })}
          </Paragraph>
        </Section>
        <Section>
          <Heading component="h2">
            {intl.formatMessage({ id: "sections.aboutMe.title" })}
          </Heading>
          <Paragraph>
            {intl.formatMessage(
              { id: "sections.aboutMe.stack" },
              {
                mark,
                br,
                years:
                  new Date().getFullYear() - new Date("2015").getFullYear(),
              }
            )}
          </Paragraph>
          <Paragraph>
            {intl.formatMessage({ id: "sections.aboutMe.colleaguesSay" })}
          </Paragraph>
          <Paragraph>
            {intl.formatMessage({ id: "sections.aboutMe.personality" })}
          </Paragraph>
          <Paragraph>
            {intl.formatMessage(
              { id: "sections.aboutMe.workingAt" },
              { a: createLink("https://tinkoff.ru/") }
            )}
          </Paragraph>
        </Section>
        <Section>
          <Heading component="h2">
            {intl.formatMessage({
              id: "sections.codeSamples.title",
            })}
          </Heading>
          <List>
            <li>
              {intl.formatMessage(
                { id: "sections.codeSamples.movieSearchApi" },
                {
                  a: createLink(
                    "https://github.com/igrek8/demo-aws-lambda-fastify"
                  ),
                }
              )}
            </li>
            <li>
              {intl.formatMessage(
                { id: "sections.codeSamples.gitHubApi" },
                {
                  a: createLink(
                    "https://github.com/igrek8/demo-github-graphql-integration"
                  ),
                }
              )}
            </li>
            <li>
              {intl.formatMessage(
                { id: "sections.codeSamples.readThroughProxy" },
                {
                  a: createLink(
                    "https://github.com/igrek8/demo-redis-proxy-cache"
                  ),
                }
              )}
            </li>
            <li>
              {intl.formatMessage(
                { id: "sections.codeSamples.webDataVault" },
                {
                  a: createLink(
                    "https://github.com/igrek8/demo-password-manager"
                  ),
                }
              )}
            </li>
            <li>
              {intl.formatMessage(
                { id: "sections.codeSamples.personaPage" },
                {
                  a: createLink(
                    "https://github.com/igrek8/demo-password-manager"
                  ),
                }
              )}
            </li>
          </List>
        </Section>
        <Section>
          <Heading component="h2">
            {intl.formatMessage({
              id: "sections.getInTouch.title",
            })}
          </Heading>
          <Paragraph>
            {intl.formatMessage(
              { id: "sections.getInTouch.text" },
              { a: createLink("mailto:i.korchagin@async.fun") }
            )}
          </Paragraph>
        </Section>
        <Section>
          <Heading component="h2">
            {intl.formatMessage({ id: "sections.thankyou.title" })}
          </Heading>
          <Paragraph>
            {intl.formatMessage(
              { id: "sections.thankyou.text" },
              {
                br: () => <br />,
                icon: (
                  <Icon
                    icon="clover"
                    style={{
                      color: "mediumseagreen",
                      display: "inline-block",
                      position: "relative",
                      bottom: -5,
                    }}
                  />
                ),
              }
            )}
          </Paragraph>
        </Section>
      </Container>
      <Footer />
    </>
  );
}

export default App;
