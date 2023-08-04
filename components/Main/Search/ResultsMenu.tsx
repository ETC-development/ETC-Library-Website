import { FunctionComponent, memo, ReactNode, RefObject, UIEventHandler } from "react";
import { SearchResponse } from "@/interfaces/interfaces.index";
import DocumentCard from "./utils/DocumentCard";
import { AnimatePresence, motion } from "framer-motion";
import SearchLoading from "./utils/SearchLoading";
import SearchError from "./utils/SearchError";

interface ResultsMenuProps {
    results: SearchResponse;
    isLoading: boolean;
    errorMsg: ReactNode;
    handleResultsScroll: UIEventHandler<HTMLDivElement>;
    docRef: RefObject<HTMLAnchorElement>;
    resultsMenuRef: RefObject<HTMLDivElement>;
}

const ResultsMenu: FunctionComponent<ResultsMenuProps> = memo(
    ({ results, isLoading, errorMsg, handleResultsScroll, docRef, resultsMenuRef }) => {
        const renderCards = () => {
            return results.files.map((doc, i) => {
                return (
                    <div key={doc.url}>
                        <DocumentCard
                            docRef={docRef}
                            doc={doc}
                            index={i}
                            totalResults={results.totalFilesCount}
                        />
                        {/* to render line only when it is not the last item */}
                        {i + 1 !== results.files.length && <hr className={"text-grey-stroke"} />}
                    </div>
                );
            });
        };

        return (
            <AnimatePresence>
                <motion.div
                    ref={resultsMenuRef}
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scaleY: 0 }}
                    className="scroll-mt-52 md:scroll-mt-72 my-2 flex flex-col w-full max-w-full max-h-96 md:max-h-100 lg:w-200 mx-auto bg-white rounded-xl shadow-md"
                >
                    <div
                        onScroll={handleResultsScroll}
                        className={"overscroll-contain overflow-y-scroll px-3 py-1"}
                    >
                        {/* if error, render error, else { if loading, render loading, else renderCards }*/}
                        {errorMsg ? (
                            <SearchError errorMsg={errorMsg} />
                        ) : isLoading ? (
                            <SearchLoading />
                        ) : (
                            renderCards()
                        )}
                    </div>
                </motion.div>
            </AnimatePresence>
        );
    }
);

export default ResultsMenu;
