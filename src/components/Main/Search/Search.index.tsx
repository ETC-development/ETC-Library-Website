import SearchBar from "./SearchBar";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import ResultsMenu from "./ResultsMenu";
import FilterBar from "./FilterBar";
import { SearchRequestQuery, SearchResponse } from "interfaces/interfaces.index";
import { debounce } from "lodash";

const limit = 20;
const delay = 200;
const URL = "http://localhost:3001";

interface FetchFunctionParams {
    (
        filters: SearchRequestQuery,
        setResults: Dispatch<SetStateAction<SearchResponse>>,
        setTotalResults: Dispatch<SetStateAction<number>>
    ): void;
}

const fetchResults: FetchFunctionParams = async (filters, setResults) => {
    const { name, page, limit, module, year, type } = filters;

    const req: SearchRequestQuery = {
        name,
        type,
        module,
        year,
        page,
        limit,
    };

    try {
        const res = await fetch(
            `${URL}/search/?name=${req.name}&type=${req.type}&module=${req.module}&year=${req.year}&page=${req.page}&limit=${req.limit}`
        );
        if (res.ok) {
            const data: SearchResponse = await res.json();
            setResults(data);
        }
    } catch (e) {
        console.log(e);
    }
};

const debouncedFetch = debounce(fetchResults, delay);

const Search = () => {
    //search query state
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

    //states for the filter selections
    const [level, setLevel] = useState<string>("");
    const [module, setModule] = useState<string>("");
    const [docType, setDocType] = useState<string>("");

    //pagination state:
    const [page, setPage] = useState<number>(1);
    const [totalResults, setTotalResults] = useState(0);

    //state for search results
    const [results, setResults] = useState<SearchResponse>({
        files: [],
        totalFilesCount: 0,
        totalPages: 0,
        currentPage: 1,
    });

    // calling fetch whenever searchQuery changes
    useEffect(() => {
        if (!searchQuery) {
            //if searchQuery is empty, we cancel the fetch
            debouncedFetch.cancel();
        } else {
            debouncedFetch(
                {
                    module,
                    limit,
                    page,
                    type: docType,
                    year: level,
                    name: searchQuery,
                },
                setResults,
                setTotalResults
            );
        }
    }, [searchQuery]);

    return (
        <div className="px-2 w-full flex flex-col items-center">
            <h2 className={"p-3 my-2 text-[18px] text-center"}>
                Find what you need faster and efficiently
            </h2>
            <SearchBar
                isFilterOpen={isFilterOpen}
                query={searchQuery}
                onInputChange={(e) => {
                    setSearchQuery(e.target.value);
                }}
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
            {results.files.length !== 0 && <ResultsMenu results={results} />}
        </div>
    );
};

export default Search;
