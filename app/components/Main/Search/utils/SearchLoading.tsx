import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const SearchLoading = () => {
    return (
        <div className={"w-full text-center p-8"}>
            <FontAwesomeIcon
                spin={true}
                fontSize={38}
                className={"text-violet m-auto"}
                icon={faSpinner}
            />
        </div>
    );
};

export default SearchLoading;
