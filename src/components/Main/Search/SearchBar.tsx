import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEventHandler, FunctionComponent } from "react";

interface SearchBarProps {
    query: string;
    onInputChange: ChangeEventHandler<HTMLInputElement>;
}

const SearchBar: FunctionComponent<SearchBarProps> = ({ query, onInputChange }) => {
    return (
        <form
            onSubmit={(e) => e.preventDefault()}
            className="shadow-md w-full my-2 mx-auto bg-white rounded-xl flex items-center justify-between h-12 px-3 text-dark-violet font-sans lg:w-200 max-w-full"
        >
            <div className={"md:p-2"}>
                <FontAwesomeIcon icon={faSearch} />
            </div>
            <input
                className="focus:outline-none placeholder:font-medium max-w-full flex-grow w-full p-2 placeholder-grey-stroke text-sm md:text-md text-dark-text"
                type="search"
                maxLength={100}
                name="search-input"
                id="searchInput"
                placeholder={"Write file name here..."}
                value={query}
                onChange={(e) => onInputChange(e)}
            />

            {/*<button className={"md:p-2"} onClick={onFilterClick}>*/}
            {/*    <FontAwesomeIcon className={isFilterOpen ? "text-secondary" : ""} icon={faFilter} />*/}
            {/*</button>*/}
        </form>
    );
};

export default SearchBar;
