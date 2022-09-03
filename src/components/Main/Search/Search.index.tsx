import SearchBar from "./SearchBar";
import { UIEventHandler, useEffect, useRef, useState } from "react";
import ResultsMenu from "./ResultsMenu";
import FilterBar from "./FilterBar";
import { SearchResponse } from "interfaces/interfaces.index";
import fetchFunction from "utils/fetchFunction";
import useDebounce from "utils/hooks/useDebounce";
import TitleSubtitle from "../TitleSubtitle";

const limit = 20;

const defaultResults = {
    files: [],
    totalFilesCount: 0,
    totalPages: 0,
    currentPage: 1,
};

const Search = () => {
    //search query state
    const [searchQuery, setSearchQuery] = useState<string>("");

    // debounced search query, using the useDebounce hook, debouncedSearch will have the same value as searchQuery, but
    // its value won't be set instantly, but after a delay, in practice, this would only change when the user is done
    // typing their query in the searchbar input
    // and when debouncedSearch's value changes, it will trigger the useEffect hook below which calls the fetch function
    const debouncedSearch = useDebounce(searchQuery, 400);

    //states for the filter selections
    const [level, setLevel] = useState<string>("");
    const [module, setModule] = useState<string>("");
    const [docType, setDocType] = useState<string>("");

    //loading state, will be true while fetching api
    const [isLoading, setIsLoading] = useState(false);

    //error state, to indicate error msg when search is done (for example "files not found")
    const [errorMsg, setErrorMsg] = useState("");

    //state for search results
    const [results, setResults] = useState<SearchResponse>(defaultResults);

    const [isTimeToLoadMore, setIsTimeToLoadMore] = useState(false);

    // reference to the DocumentCard element, will use it to get card height, to use for calculating scroll position
    const docCardRef = useRef<HTMLAnchorElement>(null);

    /**
     * A function that triggers whenever the user scrolls the search result div, and based on the scroll position, it sets isTimeToLoad state which triggers a side effect to load more docs
     * */
    const handleResultsScroll: UIEventHandler<HTMLDivElement> = async (e) => {
        // console.log("height: " + e.currentTarget.scrollHeight);
        // console.log("client height: " + e.currentTarget.clientHeight)

        const height = e.currentTarget.scrollHeight;
        const clientHeight = e.currentTarget.clientHeight;
        const top = e.currentTarget.scrollTop;

        if (docCardRef.current) {
            //height of 3 document cards
            const fourCards = 4 * docCardRef.current.clientHeight;

            //if there r 4 cards or fewer left for the scroll to end
            if (top >= height - clientHeight - fourCards) {
                if (results.currentPage !== results.totalPages) {
                    // IT'S TIME TO LOAD MORE
                    setIsTimeToLoadMore(true);
                }
            } else {
                // NOPE
                setIsTimeToLoadMore(false);
            }
        }
    };

    // handling side effects when it's time to load more documents
    useEffect(() => {
        if (results.currentPage !== results.totalPages && isTimeToLoadMore) {
            //TODO: refactor this into its own function
            (async () => {
                const res = await fetchFunction({
                    name: debouncedSearch,
                    limit,
                    page: results.currentPage + 1,
                    type: docType,
                    year: level,
                    module,
                });

                if (res.data) {
                    const newData = { ...res.data, files: results.files.concat(res.data.files) };
                    setResults(newData);
                    setIsTimeToLoadMore(false);
                    console.log("load");
                }
            })();
        }
    }, [isTimeToLoadMore, results, docType, level, module, debouncedSearch]);

    // handling side effects related to changing search queries by fetching new docs based on the changes
    useEffect(() => {
        if (debouncedSearch || module || docType || level) {
            setIsLoading(true);
            setErrorMsg("");
            fetchFunction({
                module,
                limit,
                page: 1,
                type: docType,
                year: level,
                name: debouncedSearch,
            })
                .then((res: { data?: SearchResponse; errorMsg?: string }) => {
                    if (res.data) {
                        setResults(res.data);
                    } else if (res.errorMsg) {
                        setErrorMsg(res.errorMsg);
                        setResults(defaultResults);
                    }
                    setIsLoading(false);
                })
                .catch((e: any) => {
                    setIsLoading(false);
                    setErrorMsg("Unknown Error has occurred !");
                    setResults(defaultResults);
                    console.log(e);
                });
        } else {
            setResults(defaultResults);
        }
    }, [debouncedSearch, module, docType, level]);

    return (
        <section
            id={"search"}
            className="px-2 my-32 w-full flex flex-col items-center scroll-mt-20"
        >
            <TitleSubtitle
                title={"Search"}
                subtitle={
                    // <p>
                    //     Find what you need faster and efficiently either by
                    //     <br /> Writing
                    //     <span className={"text-secondary font-normal"}> file names </span>
                    //     <span> in the search bar, or by selecting the needed </span>
                    //     <span className={"text-secondary font-normal"}>file categories</span>
                    // </p>
                    <p>
                        Find what you need faster and efficiently either by
                        <br /> Writing
                        <span className={"text-secondary font-normal"}> file names </span>
                        <span> in the search bar, or by selecting the needed </span>
                        <span className={"text-secondary font-normal"}>file categories</span>
                    </p>
                }
            />
            <SearchBar query={searchQuery} onInputChange={(e) => setSearchQuery(e.target.value)} />
            {
                <FilterBar
                    level={level}
                    module={module}
                    docType={docType}
                    setDocType={setDocType}
                    setLevel={setLevel}
                    setModule={setModule}
                />
            }
            {(errorMsg || results.files.length !== 0 || isLoading) && (
                <ResultsMenu
                    docRef={docCardRef}
                    handleResultsScroll={handleResultsScroll}
                    results={results}
                    isLoading={isLoading}
                    errorMsg={errorMsg}
                />
            )}
        </section>
    );
};

export default Search;
