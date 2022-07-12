import instagramLogo from "../images/instagram_logo.svg";
import emailIcon from "../images/email_icon.svg";
import ihanaaElamaaLogo from "../images/ihanaaelamaa_logo.jpg";
import Link from "./Link";
const HomePage = () => {
    return (
        <main className="HomePage">
            <div className="Inner">
                <h1>Burlesque Artist</h1>
                <p>
                    Olen Wendy Flow, burleskitaiteilija Seinäjoelta.
                    <br />
                    Olen esiintynyt burleskilavoilla vuodesta 2019. Esiinnyn myös duona
                    yhdessä aviomieheni Idlemanin kanssa. Tuotan tapahtumia ja työpajoja
                    Ihanaa Elämää yhdistyksessä.
                    <br />
                    Voit tilata meidät myös yksityistapahtumaasi.
                </p>
                <p>
                    I am Wendy Flow, a burlesque artist from Seinäjoki.
                    <br />
                    I have performed on burlesque stages from 2019 onwards. I also perform
                    as a duo together with my husband Idleman. I create events and
                    workshops in the Ihanaa Elämää association.
                    <br />
                    You can book us for your private event as well.
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
                        imageData={{ src: emailIcon, alt: "Email icon" }}
                        text="wendyflowburlesque@gmail.com"
                        link="mailto: wendyflowburlesque@gmail.com"
                    />
                </div>
            </div>
        </main>
    );
};

export default HomePage;
