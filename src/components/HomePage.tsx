import instagramLogo from "../instagram_logo.svg";
import emailIcon from "../email_icon.svg";
import Link from "./Link";
const HomePage = () => {
    return (
        <div className="HomePage">
            <h1>Title Goes Here</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                est laborum.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                est laborum.
            </p>
            <div className="LinkContainer">
                <Link
                    imageData={{ src: instagramLogo, alt: "Instagram Logo" }}
                    text="@instagram_handle"
                    link="https://www.instagram.com"
                />
                <Link
                    imageData={{ src: emailIcon, alt: "Email icon" }}
                    text="abc@example.com"
                    link="mailto: abc@example.com"
                />
            </div>
        </div>
    );
};

export default HomePage;
