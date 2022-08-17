import "./Footer.css";

// importing main pictures of the footer
import Computer from "assets/computer.svg";
import Math from "assets/math.svg";
import Logo from "assets/ETC Logo.png";

// importing the icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFileLines, faHeart } from "@fortawesome/free-solid-svg-icons";
import {
    faGithub,
    faInstagram,
    faLinkedin,
    faSquareFacebook,
} from "@fortawesome/free-brands-svg-icons";

// importing the wave background
import Wave from "utils/Wave";
import Contribution from "./Contribution";

const Footer: React.FunctionComponent = () => {
    return (
        <div className="w-full font-sans text-light-text">
            <div className={"rotate-180"}>
                <Wave />
            </div>
            <div className="w-full bg-dark-bg flex flex-col justify-center text-center items-center py-2 ">
                <h1 className="text-3xl lg:text-4xl text-light-text tracking-widest font-semibold">
                    Contribute
                </h1>
                <div className="w-full font-medium my-6 lg:px-[5%] flex flex-col lg:gap-96 lg:flex-row items-center lg:items-start justify-evenly lg:justify-between">
                    <Contribution
                        illustration={Computer}
                        buttonIcon={faGithub}
                        buttonText={"Contribute on Github"}
                    />

                    <div className="my-10 text-center lg:mt-28">
                        <h1 className="flex text-light-text text-2xl justify-center tracking-widest">
                            Made with
                            <FontAwesomeIcon
                                className="text-secondary mx-2 text-3xl"
                                icon={faHeart}
                            />{" "}
                            by
                        </h1>
                        <img src={Logo} alt="ETC logo" className="w-40 lg:w-60 m-auto" />
                        <div className="flex justify-center">
                            <a
                                className="social-icon"
                                href="https://web.facebook.com/ensia.tech.community/"
                            >
                                <FontAwesomeIcon
                                    icon={faSquareFacebook}

                                />
                            </a>
                            <a className="social-icon" href="https://www.instagram.com/etc_.club/">
                                <FontAwesomeIcon
                                    icon={faInstagram}

                                />
                            </a>
                            <a
                                className="social-icon"
                                href="https://www.linkedin.com/company/ensia-tech-community/?originalSubdomain=dz"
                            >
                                <FontAwesomeIcon
                                    icon={faLinkedin}

                                />
                            </a>
                            <a
                                className="social-icon"
                                href="https://www.google.com/intl/fr/gmail/about"
                            >
                                <FontAwesomeIcon
                                    icon={faEnvelope}
                                />
                            </a>
                        </div>
                    </div>

                    <Contribution
                        illustration={Math}
                        buttonIcon={faFileLines}
                        buttonText={"Submit a Document"}
                    />
                </div>
                <div className="font-light">
                    <p className="text-grey-text">All Rights Reserved 2022</p>
                    <a href="TODO">
                        <p className="text-grey-text">License Information</p>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
