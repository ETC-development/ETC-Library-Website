import SearchBar from "./SearchBar";
import { useEffect, useState } from "react";
import ResultsMenu from "./ResultsMenu";
import FilterBar from "./FilterBar";
import { FetchFunction, SearchRequestQuery, SearchResponse } from "interfaces/interfaces.index";
import { debounce } from "lodash";

const limit = 20;
const delay = 200;
const URL = "http://localhost:3001";

const fetchResults: FetchFunction = async (
    filters,
    setResults,
    setLoading,
    setError
) => {
    //to show loading spinner
    setLoading(true);

    //to hide error msg
    setError("");

    const { name = "", page, limit, module, year, type } = filters;

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

        const data: SearchResponse = await res.json();
        if (res.status === 200) {
            setResults(data);
            setLoading(false); //to hide loading spinner
            setError("");
        } else if(res.status === 400) {
            setLoading(false);
            if (data.error) {
                setError("We couldn't find any files with the provided information. Please try using filters to find what you're looking for");
            }
        }
    } catch (e) {
        setLoading(false);
        setError("Unknown error has occurred !");
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

    //loading state, will be true while fetching api
    const [isLoading, setIsLoading] = useState(false);

    //error state, to indicate error msg when search is done (for example "files not found")
    const [errorMsg, setErrorMsg] = useState("");

    //state for search results
    const [results, setResults] = useState<SearchResponse>({
        files: [],
        totalFilesCount: 0,
        totalPages: 0,
        currentPage: 1,
    });


    // calling fetch whenever searchQuery changes
    useEffect(() => {
        if (!(searchQuery || module || docType || level)) {
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
                setIsLoading,
                setErrorMsg
            );
        }
    }, [searchQuery, module, page, docType, level]);

    return (
        <div className="px-2  w-full flex flex-col items-center">
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
            {(errorMsg || results.files.length !== 0 ) && (
                <ResultsMenu results={results} isLoading={isLoading} errorMsg={errorMsg} />
            )}
        </div>
    );
};

export default Search;
