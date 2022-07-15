import GalleryEntry from "./GalleryEntry";
import image1 from "../images/gallery1.avif";
import image2 from "../images/gallery2.avif";
import image3 from "../images/gallery3.avif";
import image4 from "../images/gallery4.avif";
import image5 from "../images/gallery5.avif";
import image6 from "../images/gallery6.avif";
import image1Full from "../images/gallery1.jpg";
import image2Full from "../images/gallery2.jpg";
import image3Full from "../images/gallery3.jpg";
import image4Full from "../images/gallery4.jpg";
import image5Full from "../images/gallery5.jpg";
import image6Full from "../images/gallery6.jpg";
import { useTranslation } from "react-i18next";

const GalleryPage = () => {
    const { t } = useTranslation();
    return (
        <main className="GalleryPage">
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

export default GalleryPage;
