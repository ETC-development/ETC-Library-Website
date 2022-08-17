import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import Computer from "../../assets/computer.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

interface ContributionProps {
  illustration: string;
  buttonIcon: IconDefinition;
  buttonText: string;
}

const Contribution: React.FunctionComponent<ContributionProps> = ({illustration, buttonIcon, buttonText}) => {
  return (
    <div className={"lg:h-64 lg:flex lg:flex-col lg:justify-around"}>
      <img src={illustration} alt="computer image" className="hidden lg:inline" />
      <a
        href="https://github.com/ETC-development/ETC-Library-Website"
        className="flex justify-center content-center px-5 py-2 my-2 lg:my-4 border-2 text-light-text rounded-xl border-violet"
      >
        <FontAwesomeIcon
          icon={buttonIcon}
          className="text-2xl mr-3"
        />
        <span>{buttonText}</span>
      </a>
    </div>
  )
}


export default Contribution;