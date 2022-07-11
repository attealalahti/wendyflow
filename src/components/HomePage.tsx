import instagramLogo from "../images/instagram_logo.svg";
import emailIcon from "../images/email_icon.svg";
import ihanaaElamaaLogo from "../images/ihanaaelamaa_logo.jpg";
import Link from "./Link";
const HomePage = () => {
    return (
        <main className="HomePage">
            <div className="Inner">
                <h1>Title Goes Here</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <div className="LinkContainer">
                    <Link
                        imageData={{ src: instagramLogo, alt: "Instagram Logo" }}
                        text="@wendyflow_"
                        link="https://www.instagram.com/wendyflow_"
                    />
                    <Link
                        imageData={{ src: emailIcon, alt: "Email icon" }}
                        text="wendyflowburlesque@gmail.com"
                        link="mailto: wendyflowburlesque@gmail.com"
                    />
                    <Link
                        imageData={{ src: ihanaaElamaaLogo, alt: "Ihanaa Elämää Logo" }}
                        text="ihanaaelamaa.fi"
                        link="https://www.ihanaaelamaa.fi"
                    />
                </div>
            </div>
        </main>
    );
};

export default HomePage;
