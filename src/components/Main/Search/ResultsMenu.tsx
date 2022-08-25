import DocumentCard from "./utils/DocumentCard";

const ResultsMenu = () => {
        return (
            <div
                className="search-menu flex flex-col w-full max-w-full max-h-[calc(100vh-250px)] md:max-h-100 lg:w-200 m-auto bg-white rounded-xl border border-grey-stroke shadow-md">
                    <div className={"overscroll-contain overflow-y-scroll px-3 py-1"}>
                            <DocumentCard />
                            <DocumentCard />
                            <DocumentCard />
                            <DocumentCard />
                            <DocumentCard />
                            <DocumentCard />
                            <DocumentCard />
                            <DocumentCard />
                            <DocumentCard />
                            <DocumentCard />
                            <DocumentCard />
                    </div>
            </div>
        );
};

export default ResultsMenu;