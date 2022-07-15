import "../App.css";
import Header from "./Header";
import HomePage from "./HomePage";
import Footer from "./Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GalleryPage from "./GalleryPage";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const App = () => {
    const { t, i18n } = useTranslation();
    useEffect(() => {
        document.title = t("meta.title");
    }, [t, i18n.language]);
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/gallery" element={<GalleryPage />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
};

export default App;
