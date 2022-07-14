import instagramLogo from "../images/instagram_logo.svg";
import emailIcon from "../images/email_icon.svg";
import ihanaaElamaaLogo from "../images/ihanaaelamaa_logo.jpg";
import Link from "./Link";
import { useTranslation } from "react-i18next";

const HomePage = () => {
    const { t } = useTranslation("home");

    return (
        <main className="HomePage">
            <div className="Inner">
                <h1>{t("title")}</h1>
                <p>
                    {t("intro1")}
                    <br />
                    {t("intro2")}
                    <br />
                    {t("intro3")}
                </p>
                <div className="LinkContainer">
                    <Link
                        imageData={{ src: instagramLogo, alt: "Instagram Logo" }}
                        text="@wendyflow_"
                        link="https://www.instagram.com/wendyflow_"
                    />
                    <Link
                        imageData={{ src: ihanaaElamaaLogo, alt: "Ihanaa Elämää Logo" }}
                        text="ihanaaelamaa.fi"
                        link="https://www.ihanaaelamaa.fi"
                    />
                    <Link
                        imageData={{ src: emailIcon, alt: t("email") }}
                        text="wendyflowburlesque@gmail.com"
                        link="mailto: wendyflowburlesque@gmail.com"
                    />
                </div>
            </div>
        </main>
    );
};

export default HomePage;
