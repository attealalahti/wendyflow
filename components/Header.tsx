import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const HAMBURGER_PATH =
  "M4,4 L27,4 C28,4 28,7 27,7 L4,7 C3,7 3,4 4,4 M4,14 L27,14 C28,14 28,17 27,17 L4,17 C3,17 3,14 4,14 M27,27 L4,27 C3,27 3,24 4,24 L27,24 C28,24 28,27 27,27";
const CROSS_PATH =
  "M5,3 L28,26 C29,27 27,29 26,28 L3,5 C2,4 4,2 5,3 M5,3 L28,26 C29,27 27,29 26,28 L3,5 C2,4 4,2 5,3 M28,5 L5,28 C4,29 2,27 3,26 L26,3 C27,2 29,4 28,5";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const { t } = useTranslation();
  const router = useRouter();
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header>
      <div className="PageName">
        <Link href="/" onClick={closeMenu} legacyBehavior={false}>
          Wendy Flow
        </Link>
      </div>
      <button
        aria-label={t("header.menuButton")}
        className="MenuButton"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <svg viewBox="0 0 32 32">
          <path fill="white" d={menuOpen ? CROSS_PATH : HAMBURGER_PATH} />
        </svg>
      </button>
      <div className="Filler"></div>
      <nav style={menuOpen ? { display: "block" } : {}}>
        <ul>
          <li onClick={closeMenu}>
            <Link href="/">{t("header.home")}</Link>
          </li>
          <li onClick={closeMenu}>
            <Link href="/gallery">{t("header.gallery")}</Link>
          </li>
          <li>
            <Link href={router.asPath} locale={router.locale === "en" ? "fi" : "en"}>
              {t("header.changeLanguage")}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
