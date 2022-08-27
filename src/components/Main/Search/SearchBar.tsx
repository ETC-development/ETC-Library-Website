import { faFilter, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEventHandler, FunctionComponent, MouseEventHandler } from "react";

interface SearchBarProps {
    query: string;
    onInputChange: ChangeEventHandler<HTMLInputElement>;
    onFilterClick: MouseEventHandler<HTMLButtonElement>;
    isFilterOpen: boolean;
}

const SearchBar: FunctionComponent<SearchBarProps> = ({query, onInputChange, onFilterClick, isFilterOpen}) => {
    return (
        <form
            onSubmit={(e) => e.preventDefault()}
            className="shadow-md w-full min-w-max m-auto bg-white rounded-2xl flex items-center justify-around h-12 px-1 text-violet font-sans lg:w-200 max-w-full"
        >
            <div className="px-3">
                <FontAwesomeIcon icon={faSearch}  />
            </div>

            <input
                className="focus:outline-none w-fit flex-grow placeholder-grey-stroke text-dark-text"
                type="search"
                maxLength={100}
                name="search-input"
                id="searchInput"
                placeholder="Search by file name or part of it..."
                value={query}
                onChange={(e)=>onInputChange(e)}
            />

            <div className={"p-3"}>
                <button onClick={onFilterClick}>
                    <FontAwesomeIcon className={isFilterOpen? "text-secondary" : ""} icon={faFilter} />
                </button>
            </div>
        </form>
    );
};


export default SearchBar;