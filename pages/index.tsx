import type { NextPage } from "next";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import ExternalLink from "../components/ExternalLink";
import instagramLogo from "../public/images/instagram_logo.svg";
import ihanaaElamaaLogo from "../public/images/ihanaaelamaa_logo.webp";
import emailIcon from "../public/images/email_icon.svg";

const Home: NextPage = () => {
  const { t } = useTranslation();
  return (
    <main className="HomePage">
      <Head>
        <title>{t("meta.homeTitle")}</title>
        <meta name="description" content={t("meta.homeDescription")} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="Inner">
        <h1>{t("home.title")}</h1>
        <p>
          {t("home.intro1")}
          <br />
          {t("home.intro2")}
          <br />
          {t("home.intro3")}
        </p>
        <div className="LinkContainer">
          <ExternalLink
            imageData={{ src: instagramLogo, alt: "Instagram Logo" }}
            text="@wendyflow_"
            link="https://www.instagram.com/wendyflow_"
          />
          <ExternalLink
            imageData={{ src: ihanaaElamaaLogo.src, alt: "Ihanaa Elämää Logo" }}
            text="ihanaaelamaa.fi"
            link="https://www.ihanaaelamaa.fi"
          />
          <ExternalLink
            imageData={{ src: emailIcon, alt: t("home.email") }}
            text="wendyflowburlesque@gmail.com"
            link="mailto: wendyflowburlesque@gmail.com"
          />
        </div>
        <span className="PhotoCredit">{t("home.photoCredit")}</span>
      </div>
    </main>
  );
};

type Context = {
  locale: string;
};
export const getStaticProps = async ({ locale }: Context) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Home;
