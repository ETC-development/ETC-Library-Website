import { FunctionComponent } from "react";
import { SearchResponse } from "interfaces/interfaces.index";
import DocumentCard from "./utils/DocumentCard";

interface ResultsMenuProps {
    results: SearchResponse;
}

const ResultsMenu: FunctionComponent<ResultsMenuProps> = ({ results }) => {
    return (
        <div className="search-menu flex flex-col w-full max-w-full max-h-[calc(100vh-250px)] md:max-h-100 lg:w-200 m-auto bg-white rounded-xl  shadow-md">
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
                            {(i+1) !== results.files.length && <hr className={"text-grey-stroke"} />}
                        </>
                    );
                })}
            </div>
        </div>
    );
};

export default ResultsMenu;
