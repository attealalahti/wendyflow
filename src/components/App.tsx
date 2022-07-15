import "../App.css";
import Header from "./Header";
import HomePage from "./HomePage";
import Footer from "./Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GalleryPage from "./GalleryPage";
import { useTranslation } from "react-i18next";
import { Helmet, HelmetProvider } from "react-helmet-async";

const App = () => {
    const { t } = useTranslation();
    return (
        <HelmetProvider>
            <BrowserRouter>
                <Helmet>
                    <title>{t("meta.title")}</title>
                    <meta name="description" content={t("meta.description")} />
                    <html lang={t("meta.lang")} />
                </Helmet>
                <div className="App">
                    <Header />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/gallery" element={<GalleryPage />} />
                    </Routes>
                    <Footer />
                </div>
            </BrowserRouter>
        </HelmetProvider>
    );
};

export default App;
