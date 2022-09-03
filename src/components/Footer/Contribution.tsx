import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent } from "react";

interface ContributionProps {
    illustration: string;
    buttonIcon: IconDefinition;
    buttonText: string;
}

const Contribution: FunctionComponent<ContributionProps> = ({
    illustration,
    buttonIcon,
    buttonText,
}) => {
    return (
        <div className={"lg:h-48 mx-[3%] lg:flex lg:flex-col lg:justify-around"}>
            <img height={150} src={illustration} alt={buttonText} className="hidden lg:inline" />
            <a
                href="https://github.com/ETC-development/ETC-Library-Website"
                className="flex w-64 justify-center content-center px-5 py-2 my-2 lg:my-4 border-2 text-light-text rounded-xl border-violet"
            >
                <FontAwesomeIcon icon={buttonIcon} className="text-2xl mr-3" />
                <span>{buttonText}</span>
            </a>
        </div>
    );
};

export default Contribution;
