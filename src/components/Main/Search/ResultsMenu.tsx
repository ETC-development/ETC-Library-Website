import { FunctionComponent, memo } from "react";
import { SearchResponse } from "interfaces/interfaces.index";
import DocumentCard from "./utils/DocumentCard";
import { AnimatePresence, motion } from "framer-motion";

interface ResultsMenuProps {
    results: SearchResponse;
}

const ResultsMenu: FunctionComponent<ResultsMenuProps> = memo(({ results }) => {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scaleY: 0 }}
                className="search-menu my-2 flex flex-col w-full max-w-full max-h-[calc(100vh-250px)] md:max-h-100 lg:w-200 mx-auto bg-white rounded-xl  shadow-md"
            >
                <div className={"overscroll-contain overflow-y-scroll px-3 py-1"}>
                    {results.files.map((doc, i) => {
                        return (
                            <>
                                <DocumentCard
                                    key={doc.url}
                                    doc={doc}
                                    index={i}
                                    totalResults={results.totalFilesCount}
                                />
                                {/* to render line only when it is not the last item */}
                                {i + 1 !== results.files.length && (
                                    <hr className={"text-grey-stroke"} />
                                )}
                            </>
                        );
                    })}
                </div>
            </motion.div>
        </AnimatePresence>
    );
});

export default ResultsMenu;
