import "../App.css";
import Header from "./Header";
import HomePage from "./HomePage";
import Footer from "./Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GalleryPage from "./GalleryPage";

const App = () => {
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
