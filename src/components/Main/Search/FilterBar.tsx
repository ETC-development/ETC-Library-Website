import FilterDropdown from "./utils/FilterDropdown";
import { Dispatch, FunctionComponent, memo, SetStateAction, useEffect, useState } from "react";
import { FilterDropdownProps } from "interfaces/interfaces.index";

import modulesArr from "utils/modules";
import getModulesFromLevel from "utils/getModulesFromLevel";

interface FilterBarProps {
    level: string;
    module: string;
    docType: string;
    setLevel: Dispatch<SetStateAction<string>>;
    setModule: Dispatch<SetStateAction<string>>;
    setDocType: Dispatch<SetStateAction<string>>;
}

const levels: FilterDropdownProps["selections"] = modulesArr.map((year) => {
    return {
        label: year.title,
        value: year.dropDownValue,
    };
});

const docTypes: FilterDropdownProps["selections"] = [
    {
        value: "exams",
        label: "Exams",
    },
    {
        value: "tests",
        label: "Tests",
    },
    {
        value: "worksheets",
        label: "Worksheets",
    },
    {
        value: "courses",
        label: "Courses",
    },
    {
        value: "Resources",
        label: "Resources",
    },
];

const FilterBar: FunctionComponent<FilterBarProps> = memo(
    ({ docType, level, module, setModule, setDocType, setLevel }) => {
        const onSelectionChange: FilterDropdownProps["onDropdownChange"] = (e) => {
            switch (e.target.name.toLowerCase()) {
                case "level":
                    setLevel(e.target.value);
                    setModules(getModulesFromLevel(e.target.value));
                    // making the module state an empty string to prevent fetching with the old value before changing it
                    setModule("");
                    break;
                case "module":
                    setModule(e.target.value);
                    break;
                case "type":
                    setDocType(e.target.value);
                    break;
            }
        };

        const [modules, setModules] = useState<FilterDropdownProps["selections"]>([]);

        useEffect(() => {
            setModules(getModulesFromLevel());
            // making the module state an empty string to prevent fetching with the old value before changing it
            setModule("");
        }, [setModule]);

        return (
            <div
                className={
                    "w-full my-2 lg:w-200 max-w-full py-2 px-5 bg-white shadow-md rounded-xl text-dark-text"
                }
            >
                <div
                    className={
                        "flex md:items-center flex-col justify-center md:justify-start lg:flex-row"
                    }
                >
                    <div className={"mr-2 my-2 md:my-0 text-center"}>
                        Search for files by <span className={"font-semibold"}>categories:</span>
                    </div>
                    <div className={"flex flex-col md:flex-row justify-center items-center"}>
                        <div className={"flex flex-col sm:flex-row"}>
                            <FilterDropdown
                                value={level}
                                onDropdownChange={onSelectionChange}
                                type={"level"}
                                selections={levels}
                            />
                            <FilterDropdown
                                value={module}
                                onDropdownChange={onSelectionChange}
                                type={"module"}
                                selections={modules}
                            />
                            <FilterDropdown
                                value={docType}
                                onDropdownChange={onSelectionChange}
                                type={"type"}
                                selections={docTypes}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
);

export default FilterBar;
