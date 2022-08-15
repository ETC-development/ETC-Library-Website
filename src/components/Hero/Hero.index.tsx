import HeroIllustration from "assets/hero.svg"
import Typed from "react-typed"
import './Hero.css'

const Hero: React.FunctionComponent = () => {
    return (
        <div className="flex flex-col">
            <div className="bg-dark-bg h-[calc(100vh-65px)] flex flex-wrap flex-col-reverse justify-center gap-10 content-center p-2 md:p-10 md:flex-row md:flex-row md:gap-10 md:justify-around">
                <div className="flex flex-col text-center md:text-left gap-4 justify-center">
                    <h1 className="hero-h1">Welcome
                        to <span
                            className="text-secondary">ENSIA Bib</span></h1>
                    <h2 className="hero-h2">
                        <span className="text-violet">The library </span>
                        <span>that contains all of the </span>
                        <span
                            className="text-secondary">studying resources </span>
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
                        <span className="text-secondary block md:inline">
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

                <div>
                    <img src={HeroIllustration}/>
                </div>
            </div>

            <div className="w-full overflow-hidden leading-[0px]">
                <svg className="relative block w-[400%] h-[60px] origin-center" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 1200 120"
                     preserveAspectRatio="none">
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        className="fill-secondary"></path>
                </svg>
            </div>

            <div className="w-full overflow-hidden leading-[0px] translate-y-[-65px]">
                <svg className="relative block w-[300%] h-[60px] origin-center" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 1200 120"
                     preserveAspectRatio="none">
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        className="fill-dark-bg"></path>
                </svg>
            </div>

        </div>
    )
}

export default Hero;