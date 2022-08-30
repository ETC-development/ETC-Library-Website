import { ChangeEventHandler } from "react";

export interface Module {
    name: string;
    url: string;
    dropdownValue: string;
    description?: string; //might add description to show as a tooltip when hovering the module
}

export interface Semester {
    title: string;
    modules: Module[];
}

export interface Year {
    title: string;
    dropDownValue: string;
    semesters: Semester[];
}

export interface FilterDropdownProps {
    type: string; //default value/label
    selections: {
        label: string;
        value: string;
    }[];
    onDropdownChange: ChangeEventHandler<HTMLSelectElement>;
    value: string;
}

export interface SearchRequestQuery {
    name?: string;
    type?: string;
    module?: string;
    semester?: string;
    year?: string;

    //for pagination
    page?: number;
    limit?: number;
}

export interface DocumentInfo {
    name: string;
    type: string;
    module: string;
    semester: string;
    year: string;
    url: string;
}

export interface SearchResponse {
    files: DocumentInfo[];
    totalFilesCount: number;
    totalPages: number;
    currentPage: number;
    error?: string;
}

//
// export interface FetchFunction {
//     (
//         filters: SearchRequestQuery,
//
//         setResults: Dispatch<SetStateAction<SearchResponse>>,
//
//
//         setLoading: Dispatch<SetStateAction<boolean>>,
//
//         setError: Dispatch<SetStateAction<string>>
//
//     ): void;
// }

export interface FetchFunction {
    (filters: SearchRequestQuery): Promise<{
        data?: SearchResponse;
        errorMsg?: string;
    }>;
}
