const Wave: React.FunctionComponent = () => {
    return (
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
    )
}

export default Wave;