import "./Footer.css";

// importing main pictures of the footer
// import Computer from "assets/computer.svg";
// import Math from "assets/math.svg";
// import Issue from "assets/problem.svg";

// import Logo from "assets/ETC Logo.webp";

// importing the icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFeed, faFileLines, faHeart } from "@fortawesome/free-solid-svg-icons";
import {
    faGithub,
    faInstagram,
    faLinkedin,
    faSquareFacebook,
} from "@fortawesome/free-brands-svg-icons";

// importing the wave background
import Wave from "@/utils/Wave";
import Contribution from "./Contribution";
import Image from "next/image";

const Footer = () => {
    return (
        <footer id={"contribute"} className="w-full font-sans text-light-text scroll-mt-24">
            <div className={"rotate-180"}>
                <Wave />
            </div>
            <div className="w-full bg-dark-bg flex flex-col justify-center text-center items-center py-2 ">
                <h1 className="text-3xl lg:text-4xl text-light-text tracking-widest font-semibold">
                    Contribute
                </h1>
                <div className="w-full font-medium my-12 flex flex-col lg:flex-row items-center justify-center">
                    <Contribution
                        illustration={"/computer.svg"}
                        buttonIcon={faGithub}
                        buttonText={"Contribute on Github"}
                        link={"https://github.com/ETC-development/ETC-Library-Website"}
                    />

                    <Contribution
                        illustration={"/problem.svg"}
                        buttonIcon={faFeed}
                        buttonText={"Give us your feedback"}
                        link={"https://forms.gle/hKG5ztqJkk6a2bq76"}
                    />

                    <Contribution
                        illustration={"/math.svg"}
                        buttonIcon={faFileLines}
                        buttonText={"Submit a Document"}
                        link={"https://forms.gle/wRAToS93zneKiW5a6"}
                    />
                </div>
                <div>
                    <div className="mb-2 flex-grow text-center">
                        <h1 className="flex text-light-text text-xl justify-center items-center tracking-widest">
                            Made with
                            <FontAwesomeIcon
                                className="text-secondary mr-2 ml-1.5 text-xl"
                                icon={faHeart}
                            />
                            <span>by</span>
                        </h1>
                        <div className="p-6">
                            <Image
                                width={240}
                                height={247}
                                src={"/ETC-logo.webp"}
                                alt="ETC logo"
                                className="w-36 m-auto"
                                unoptimized
                            />
                        </div>
                        <div className="flex justify-center">
                            <a
                                className="social-icon"
                                href="https://web.facebook.com/ensia.tech.community/"
                            >
                                <FontAwesomeIcon icon={faSquareFacebook} />
                            </a>
                            <a className="social-icon" href="https://www.instagram.com/etc_.club/">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a
                                className="social-icon"
                                href="https://www.linkedin.com/company/ensia-tech-community/?originalSubdomain=dz"
                            >
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                            <a className="social-icon" href="mailto:tech-community@ensia.edu.dz">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </a>
                        </div>
                    </div>

                    <div className="font-light">
                        <p className="text-grey-text">
                            All Rights Reserved {new Date().getFullYear()}
                        </p>
                        <a href="https://www.gnu.org/licenses/gpl-3.0.txt">
                            <p className="text-grey-text">License Information</p>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
