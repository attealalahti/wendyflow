import { Link } from "react-router-dom";
import { useState } from "react";

const HAMBURGER_PATH =
    "M4,4 L27,4 C28,4 28,7 27,7 L4,7 C3,7 3,4 4,4 M4,14 L27,14 C28,14 28,17 27,17 L4,17 C3,17 3,14 4,14 M27,27 L4,27 C3,27 3,24 4,24 L27,24 C28,24 28,27 27,27";
const CROSS_PATH =
    "M5,3 L28,26 C29,27 27,29 26,28 L3,5 C2,4 4,2 5,3 M5,3 L28,26 C29,27 27,29 26,28 L3,5 C2,4 4,2 5,3 M28,5 L5,28 C4,29 2,27 3,26 L26,3 C27,2 29,4 28,5";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    return (
        <header>
            <div className="PageName">
                <Link to="/">Wendy Flow</Link>
            </div>
            <button onClick={() => setMenuOpen(!menuOpen)}>
                <svg viewBox="0 0 32 32">
                    <path fill="white" d={menuOpen ? CROSS_PATH : HAMBURGER_PATH} />
                </svg>
            </button>
            <nav style={{ display: menuOpen ? "unset" : "none" }}>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/gallery">Gallery</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
