import HeroIllustration from "assets/hero.svg"
import Typed from "react-typed"
import './Hero.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAnglesUp} from "@fortawesome/free-solid-svg-icons";

import quotes from "utils/quotes";


const Hero: React.FunctionComponent = () => {
    return (
        <div className="flex flex-col bg-dark-bg text-light-text font-sans">
            {/* Illustration + Paragraph */}
            <div
                className="bg-dark-bg lg:h-fit w-full flex-grow-0 flex-shrink flex flex-no-wrap flex-col-reverse justify-center content-center px-2 lg:flex-row lg:flex-row lg:justify-around lg:px-10">
                <div
                    className="flex flex-shrink flex-col text-center lg:text-left gap-4 justify-center content-center">
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
                                strings={[
                                    "Exams.",
                                    "Worksheets.",
                                    "Tests.",
                                    "Courses."
                                ]}
                                typeSpeed={150}
                                backSpeed={50}
                                loop
                            />
                        </span>
                    </h2>
                </div>

                {/* Illustration */}
                <div className="my-6 flex flex-col w-full lg:w-100 justify-center content-center">
                    <img className="m-auto w-96 lg:w-full" src={HeroIllustration}/>
                    <div className={"text-center text-2xl p-4 font-cursive mt-6"}>
                        “{quotes[Math.floor(Math.random() * quotes.length)%quotes.length]}”
                    </div>
                </div>
            </div>

            {/* Motivational quote */}

            {/* Icon */}
            <div className={"text-center text-secondary p-2 mt-10 animate-bounce"}>
                <FontAwesomeIcon className={"text-3xl lg:text-5xl"} icon={faAnglesUp} />
            </div>

            {/* Wave SVGs */}
            <div className={"relative"}>
                <div className="absolute w-full overflow-hidden leading-[0px]">
                    <svg className="relative block w-[400%] h-[75px] origin-center" data-name="Layer 1"
                         xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 1200 100"
                         preserveAspectRatio="none">
                        <path
                            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                            className="fill-secondary"></path>
                    </svg>
                </div>

                <div className="absolute w-full overflow-hidden leading-[0px]">
                    <svg className="relative block w-[300%] h-[60px] origin-center" data-name="Layer 2"
                         xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 1200 100"
                         preserveAspectRatio="none">
                        <path
                            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                            className="fill-dark-bg"></path>
                    </svg>
                </div>
            </div>

        </div>
    )
}

export default Hero;