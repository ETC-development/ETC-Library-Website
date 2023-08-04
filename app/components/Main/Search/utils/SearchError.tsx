// import { ReactComponent as NotFound } from "assets/searchError.svg";
import Image from "next/image";
import { FunctionComponent, ReactNode } from "react";

interface SearchErrorProps {
    errorMsg: ReactNode;
}

const SearchError: FunctionComponent<SearchErrorProps> = ({ errorMsg }) => {
    return (
        <div className={"w-full text-center p-4 flex flex-col justify-center items-center"}>
            <div className={"p-3"}>
                {/* <NotFound /> */}
                <Image src={"/searchError.svg"} width={150} height={150} alt="search error image" />
            </div>
            <div className={"p-2 text-dark-text"}>{errorMsg}</div>
        </div>
    );
};

export default SearchError;
