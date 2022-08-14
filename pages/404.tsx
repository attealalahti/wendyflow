import { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Head from "next/head";

const Custom404: NextPage = () => {
  const { t } = useTranslation();
  return (
    <main>
      <Head>
        <title>{t("meta.homeTitle")}</title>
        <meta name="description" content={t("meta.homeDescription")} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="Error">{t("404")}</h1>
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
export default Custom404;
