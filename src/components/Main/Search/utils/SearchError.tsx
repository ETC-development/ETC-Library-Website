import { ReactComponent as NotFound } from "assets/searching33.svg";
import { FunctionComponent } from "react";

interface SearchErrorProps {
    errorMsg: string;
}

const SearchError: FunctionComponent<SearchErrorProps> = ({ errorMsg }) => {
    return (
        <div className={"w-full text-center p-4 flex flex-col justify-center items-center"}>
            <div className={"p-3"}>
                <NotFound />
            </div>
            <div className={"p-2 text-dark-text"}>{errorMsg}</div>
        </div>
    );
};

export default SearchError;
