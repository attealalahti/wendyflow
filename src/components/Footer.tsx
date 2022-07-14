import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer>
            <div className="Inner">
                <div>{t("footer.siteCredit")}</div>
            </div>
        </footer>
    );
};

export default Footer;
