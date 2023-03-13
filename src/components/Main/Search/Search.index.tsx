import SearchBar from "./SearchBar";
import { ReactNode, UIEventHandler, useEffect, useRef, useState } from "react";
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

const errorOfSearch = (
    <p>
        <div className={"text-left p-1"}>
            No document name was found to match your search term, please make sure to:
        </div>
        <ul className={"text-left px-4"}>
            <li className={"list-disc"}>
                Write a <span className={"text-secondary"}>Name of a Document</span> in the search
                bar instead of a <span className={"text-secondary"}>Module Name.</span>
            </li>
            <li className={"list-disc"}>
                Use the <span className={"text-secondary"}>Search by Categories</span> feature below
                to find files related to a specific Module or Level or Type.
            </li>
            <li className={"list-disc"}>
                Clear the search input text if you are searching by categories.
            </li>
        </ul>
    </p>
);

const errorOfFilterWithDocType = (
    <p>
        <div>No documents were found using the provided category options, please try to:</div>
        <ul>
            <li className={"list-disc"}>
                Set <span className={"text-secondary"}>Type</span> option to{" "}
                <span className={"text-secondary"}>All</span> since some modules don't have some
                categories
            </li>
        </ul>
    </p>
);

const errorOfFilter = (
    <p>
        <div>No documents were found using the provided Category Options</div>
    </p>
);

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
    const [errorMsg, setErrorMsg] = useState<ReactNode>(null);

    //state for search results
    const [results, setResults] = useState<SearchResponse>(defaultResults);

    const [isTimeToLoadMore, setIsTimeToLoadMore] = useState(false);

    // reference to the DocumentCard element, will use it to get card height, to use for calculating scroll position
    const docCardRef = useRef<HTMLAnchorElement>(null);

    // a reference to the results' menu, we'll use it to scroll to results menu when results are found
    const resultsMenuRef = useRef<HTMLDivElement>(null);

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
                }
            })();
        }
    }, [isTimeToLoadMore, results, docType, level, module, debouncedSearch]);

    // handling side effects related to changing search queries by fetching new docs based on the changes
    useEffect(() => {
        // we'll only fetch when at least one of these params are not empty
        if (debouncedSearch || module || docType || level) {
            // starting loading spinner
            setIsLoading(true);

            // removing error message of it exists
            setErrorMsg(null);

            // we run the fetch function with the new params
            fetchFunction({
                module,
                limit,
                page: 1,
                type: docType,
                year: level,
                name: debouncedSearch,
            })
                //handling the resolved promise, we receive possibly 3 params, data object, error msg and/or response status
                .then((res: { data?: SearchResponse; errorMsg?: string; status?: number }) => {
                    // when there is data (means the fetch was successful
                    if (res.data) {
                        //setting the results state with the received data
                        setResults(res.data);

                        //when there is an error, and it is a "bad request" error (status 400)
                    } else if (res.errorMsg && res.status === 400) {
                        // Here we'll show errors based on the status of the search/filter params that the user has set

                        // if there is text written in the searchBar, we write the errorOfSearch errorMsg to the ser
                        if (debouncedSearch) {
                            setErrorMsg(errorOfSearch);
                        } else {
                            // When search is empty (means the user only used categorical search)

                            // if the user had set the docType, we advise them to set it to All for the hope of getting results
                            if (docType) {
                                setErrorMsg(errorOfFilterWithDocType);
                            } else {
                                // Otherwise if docType wasn't set, we just tell the user that we couldn't find files with the provided query
                                setErrorMsg(errorOfFilter);
                            }
                        }

                        // When there is an error, we set the results to a default state object
                        setResults(defaultResults);
                    }

                    // after everything is done, we stop showing the loading spinner
                    setIsLoading(false);

                    //if resultsMenu ref is defined, we smoothly scroll to that menu
                    if (resultsMenuRef.current) {
                        resultsMenuRef.current.scrollIntoView({ behavior: "smooth" });
                    }
                })
                .catch((e: any) => {
                    setIsLoading(false);
                    setErrorMsg("Unknown Error has occurred !");
                    setResults(defaultResults);

                    //if resultsMenu ref is defined, we smoothly scroll to that menu
                    if (resultsMenuRef.current) {
                        resultsMenuRef.current.scrollIntoView({ behavior: "smooth" });
                    }
                    console.log(e);
                });
        } else {
            // when the user clears the query, we set the results to default status so that the results menu will be hidden
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
                    <div>
                        Find what you need faster and efficiently
                        <br />
                        <span className={"lg:hidden block"}></span>
                        <span>by Selecting the needed </span>
                        <b className={"text-secondary font-medium"}>File Categories</b>
                        <span>
                            , <br className={"sm:hidden"} /> or Writing
                        </span>
                        <b className={"text-secondary font-medium"}> File Names </b>
                        <span> in the search bar. </span>
                    </div>
                }
            />

            <div
                className={
                    "w-full my-2 lg:w-200 max-w-full py-2 px-5 bg-secondary shadow-md rounded-xl text-dark-text"
                }
            >
                <p className={"text-center font-semibold font-dark-bg"}>
                    The files are temporarily not available for visitors outside of ENSIA, we are
                    trying to fix the problem as soon as possible
                </p>
            </div>

            <FilterBar
                level={level}
                module={module}
                docType={docType}
                setDocType={setDocType}
                setLevel={setLevel}
                setModule={setModule}
            />
            <SearchBar query={searchQuery} onInputChange={(e) => setSearchQuery(e.target.value)} />

            {(errorMsg || results.files.length !== 0 || isLoading) && (
                <ResultsMenu
                    resultsMenuRef={resultsMenuRef}
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
