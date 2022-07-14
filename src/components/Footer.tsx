import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation("footer");
    return (
        <footer>
            <div className="Inner">
                <div>{t("siteCredit")}</div>
            </div>
        </footer>
    );
};

export default Footer;
