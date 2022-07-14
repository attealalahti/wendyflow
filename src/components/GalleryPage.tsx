import image from "../images/background_image.jpg";
import GalleryEntry from "./GalleryEntry";
const GalleryPage = () => {
    return (
        <main className="GalleryPage">
            <h1>Galleria</h1>
            <div className="Inner">
                <GalleryEntry
                    image={image}
                    alt="Wendy Flow"
                    credit="Biitujumi PhotoGraphy"
                />
            </div>
        </main>
    );
};

export default GalleryPage;
