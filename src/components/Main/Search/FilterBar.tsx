import FilterDropdown from "./utils/FilterDropdown";
import { Dispatch, FunctionComponent, memo, SetStateAction, useEffect, useState } from "react";
import { FilterDropdownProps } from "interfaces/interfaces.index";
import { AnimatePresence, motion } from "framer-motion";

import modulesArr from "utils/modules";

interface FilterBarProps {
    level: string;
    module: string;
    docType: string;
    setLevel: Dispatch<SetStateAction<any>>;
    setModule: Dispatch<SetStateAction<any>>;
    setDocType: Dispatch<SetStateAction<any>>;
}

// TODO: MOVE THESE TO UTIL FUNCTIONS/FILES

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

/**
 * A function that generates the list of modules based on the selected level
 * @param {string?} level: level dropdown value ("1", "2", ... "5"), if it is not provided, the function will return all modules for all years
 * @param {Dispatch<SetStateAction<any>>} setModule  State setter for module, we'll use it to set module filter selection to ""
 * @returns {FilterDropdownProps["selections"]} Array of filters dropdown selections objects
 * @see FilterDropdownProps
 * */
const getModulesFromLevel = (
    setModule: Dispatch<SetStateAction<any>>,
    level?: string
): FilterDropdownProps["selections"] => {
    let output: FilterDropdownProps["selections"] = [];

    // if level is provided, return only modules of that level
    if (level) {
        const index = +level - 1; //level can be: "1", "2" ... "5", so we subtract 1 to use it as index of array
        modulesArr[index].semesters.forEach((semester) => {
            semester.modules.forEach((module) => {
                output.push({ label: module.name, value: module.dropdownValue });
            });
        });
    } else {
        //if level isn't provided, return all modules
        modulesArr.forEach((year) => {
            year.semesters.forEach((semester) => {
                semester.modules.forEach((module) => {
                    output.push({ label: module.name, value: module.dropdownValue });
                });
            });
        });
    }

    // making the module state an empty string to prevent fetching with the old value before changing it
    setModule("");

    return output;
};

const FilterBar: FunctionComponent<FilterBarProps> = memo(
    ({ docType, level, module, setModule, setDocType, setLevel }) => {
        const onSelectionChange: FilterDropdownProps["onDropdownChange"] = (e) => {
            switch (e.target.name.toLowerCase()) {
                case "level":
                    setLevel(e.target.value);
                    setModules(getModulesFromLevel(setModule, e.target.value));
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
            setModules(getModulesFromLevel(setModule));
        }, [setModule]);

        return (
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0, scaleY: 0, y: -100 }}
                    animate={{ opacity: 1, scaleY: 1, y: 0 }}
                    exit={{ opacity: 0, scaleY: 0 }}
                    transition={{ type: "tween" }}
                    className={
                        "w-full my-2 lg:w-200 py-2 px-5 bg-white shadow-md rounded-xl text-dark-text"
                    }
                >
                    <div className={"flex md:items-center gap-2 "}>
                        <div>Filters:</div>
                        <div className={"flex flex-col md:flex-row gap-2 w-full"}>
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
                </motion.div>
            </AnimatePresence>
        );
    }
);

export default FilterBar;
