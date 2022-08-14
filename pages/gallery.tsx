import type { NextPage } from "next";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import GalleryEntry from "../components/GalleryEntry";
import image1 from "../public/images/gallery1.webp";
import image2 from "../public/images/gallery2.webp";
import image3 from "../public/images/gallery3.webp";
import image4 from "../public/images/gallery4.webp";
import image5 from "../public/images/gallery5.webp";
import image6 from "../public/images/gallery6.webp";
import image1Full from "../public/images/gallery1.jpg";
import image2Full from "../public/images/gallery2.jpg";
import image3Full from "../public/images/gallery3.jpg";
import image4Full from "../public/images/gallery4.jpg";
import image5Full from "../public/images/gallery5.jpg";
import image6Full from "../public/images/gallery6.jpg";

const Gallery: NextPage = () => {
  const { t } = useTranslation();
  return (
    <main className="GalleryPage">
      <Head>
        <title>{t("meta.galleryTitle")}</title>
        <meta name="description" content={t("meta.galleryDescription")} />
      </Head>
      <h1>{t("gallery.gallery")}</h1>
      <div className="Inner">
        <GalleryEntry
          image={image1}
          fullImage={image1Full}
          alt="Wendy Flow"
          credit="Flashing Porridge"
        />
        <GalleryEntry
          image={image2}
          fullImage={image2Full}
          alt="Wendy Flow"
          credit="Gloria Grafia"
        />
        <GalleryEntry
          image={image3}
          fullImage={image3Full}
          alt="Wendy Flow"
          credit="Flashing Porridge"
        />
        <GalleryEntry
          image={image4}
          fullImage={image4Full}
          alt="Wendy Flow"
          credit="Flashing Porridge"
        />
        <GalleryEntry
          image={image5}
          fullImage={image5Full}
          alt="Wendy Flow"
          credit="Biitujumi PhotoGraphy"
        />
        <GalleryEntry
          image={image6}
          fullImage={image6Full}
          alt="Wendy Flow"
          credit="Biitujumi PhotoGraphy"
        />
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

export default Gallery;
