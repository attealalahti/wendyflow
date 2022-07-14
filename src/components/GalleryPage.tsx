import GalleryEntry from "./GalleryEntry";
import image1 from "../images/gallery1.jpg";
import image2 from "../images/gallery2.jpg";
import image3 from "../images/gallery3.jpg";
import image4 from "../images/gallery4.jpg";
import image5 from "../images/gallery5.jpg";
import image6 from "../images/gallery6.jpg";
import { useTranslation } from "react-i18next";

const GalleryPage = () => {
    const { t } = useTranslation("gallery");
    return (
        <main className="GalleryPage">
            <h1>{t("gallery")}</h1>
            <div className="Inner">
                <GalleryEntry
                    image={image1}
                    alt="Wendy Flow"
                    credit="Flashing Porridge"
                />
                <GalleryEntry image={image2} alt="Wendy Flow" credit="Gloria Grafia" />
                <GalleryEntry
                    image={image3}
                    alt="Wendy Flow"
                    credit="Flashing Porridge"
                />
                <GalleryEntry
                    image={image4}
                    alt="Wendy Flow"
                    credit="Flashing Porridge"
                />
                <GalleryEntry
                    image={image5}
                    alt="Wendy Flow"
                    credit="Biitujumi PhotoGraphy"
                />
                <GalleryEntry
                    image={image6}
                    alt="Wendy Flow"
                    credit="Biitujumi PhotoGraphy"
                />
            </div>
        </main>
    );
};

export default GalleryPage;
