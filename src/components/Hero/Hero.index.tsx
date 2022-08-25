import HeroIllustration from "assets/hero.svg";
import Typed from "react-typed";
import "./Hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";

import quotes from "utils/quotes";
import Wave from "utils/Wave";

const Hero: React.FunctionComponent = () => {
    return (
        <div className="flex flex-col bg-dark-bg text-light-text font-sans">
            {/* Illustration + Paragraph */}
            <div className="bg-dark-bg lg:h-fit w-full flex-grow-0 flex-shrink flex flex-no-wrap flex-col-reverse justify-center content-center px-2 lg:flex-row lg:justify-around lg:px-10">
                {/* Paragraphs */}
                <div className="flex flex-shrink flex-col text-center lg:text-left gap-4 justify-center content-center">
                    <h1 className="hero-h1">
                        <span>Welcome to </span>
                        <span className="text-secondary">ENSIA Bib</span>
                    </h1>
                    <h2 className="hero-h2">
                        <span className="text-violet">The library </span>
                        <span>that contains all of the </span>
                        <span className="text-secondary">studying resources </span>
                        <span>used in </span>
                        <span className="text-secondary">ENSIA</span>
                        <span>.</span>
                    </h2>
                    <h2 className="hero-h2">
                        <span className="text-violet">Created </span>
                        <span>and </span>
                        <span className="text-violet">maintained </span>
                        <span>solely by </span>
                        <span className="text-secondary">students</span>
                        <span>.</span>
                    </h2>
                    <h2 className="hero-h2">
                        <span>Providing </span>
                        <span className="text-violet">everyone </span>
                        <span>with </span>
                        <span className="text-secondary block lg:inline">
                            <Typed
                                strings={["Exams.", "Worksheets.", "Tests.", "Courses."]}
                                typeSpeed={150}
                                backSpeed={50}
                                loop
                            />
                        </span>
                    </h2>
                </div>

                {/* Illustration */}
                <div className="my-6 flex flex-col w-full lg:w-100 justify-center content-center">
                    <img className="m-auto w-96 lg:w-full" alt="hero illustration" src={HeroIllustration} />
                    <div className={"text-center text-2xl p-4 font-cursive mt-6"}>
                        “{quotes[Math.floor(Math.random() * quotes.length)]}”
                    </div>
                </div>
            </div>

            {/* Icon */}
            <div className={"text-center text-secondary p-2 mt-10"}>
                <a className={"pt-6 px-1 lg:pt-10 lg:px-2"} href={"#main"}>
                    <FontAwesomeIcon className={"text-3xl animate-bounce lg:text-5xl"} icon={faAnglesUp} />
                </a>
            </div>

            {/* Wave SVGs */}
            <Wave />
        </div>
    );
};

export default Hero;
