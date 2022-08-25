import SearchBar from "./SearchBar";
import React, { ChangeEvent, useState } from "react";
import ResultsMenu from "./ResultsMenu";
import FilterBar from "./FilterBar";

const Search = () => {
    //search query state
    const [searchQuery, setSearchQuery] = useState<string>("");

    const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

    //states for the filter selections
    const [level, setLevel] = useState<string>("");
    const [module, setModule] = useState<string>("");
    const [docType, setDocType] = useState<string>("");

    // onChange functions
    const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    return (
        <div className="px-2 w-full flex flex-col items-center gap-2">
            <h2 className={"p-3 text-[18px] text-center"}>
                Find what you need faster and efficiently
            </h2>
            <SearchBar
                isFilterOpen={isFilterOpen}
                query={searchQuery}
                onInputChange={onSearchChange}
                onFilterClick={() => {
                    setIsFilterOpen(!isFilterOpen);
                }}
            />
            {isFilterOpen && (
                <FilterBar
                    level={level}
                    module={module}
                    docType={docType}
                    setDocType={setDocType}
                    setLevel={setLevel}
                    setModule={setModule}
                />
            )}
            <ResultsMenu />
        </div>
    );
};

export default Search;