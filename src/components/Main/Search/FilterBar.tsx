import FilterDropdown from "./utils/FilterDropdown";
import { Dispatch, FunctionComponent, SetStateAction, useState } from "react";
import { FilterDropdownProps } from "interfaces/interfaces.index";

import modulesArr from "utils/modules";

interface FilterBarProps {
    level: string;
    module: string;
    docType: string;
    setLevel: Dispatch<SetStateAction<any>>
    setModule: Dispatch<SetStateAction<any>>
    setDocType: Dispatch<SetStateAction<any>>
}

const FilterBar: FunctionComponent<FilterBarProps> = ({docType,level,module, setModule, setDocType, setLevel}) => {
    // a function that loops over the indexedModules array and returns an array of type: FilterDropdownProps["selections"]
    const getLevelsArr = (): FilterDropdownProps["selections"] => {
        return modulesArr.map((year) => {
            return {
                label: year.title,
                value: year.dropDownValue,
            };
        });
    };

    /**
     * a function that loops over indexedModules array and returns an array of modules that are uder the specified level (year)
     * @param {string} level: dropdown value of the level
     * */
    const getModulesFromLevel = (level?: string): FilterDropdownProps["selections"] => {
        let output: FilterDropdownProps["selections"] = [];
        if (level) {
            const index = +level - 1; //level can be: "1", "2" ... "5", so we subtract 1 to use it as index of array
            console.log(index);

            modulesArr[index].semesters.forEach((semester) => {
                semester.modules.forEach((module) => {
                    output.push({ label: module.name, value: module.dropdownValue });
                });
            });
        } else {
            modulesArr.map((year) => {
                year.semesters.map((semester) => {
                    semester.modules.forEach((module) => {
                        output.push({ label: module.name, value: module.dropdownValue });
                    });
                });
            });
        }
        return output;
    };

    const getDocTypes = (): FilterDropdownProps["selections"] => {
        return [
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
    };

    const onSelectionChange: FilterDropdownProps["onChange"] = (e) => {
        switch (e.target.name.toLowerCase()) {
            case "level":
                setLevel(e.target.value);
                setModules(getModulesFromLevel(e.target.value));
                break;
            case "module":
                setModule(e.target.value);
                break;
            case "type":
                setDocType(e.target.value);
                break;
        }
    };


    //states for the options of the select elements
    const [levels, setLevels] = useState<FilterDropdownProps["selections"]>(getLevelsArr);

    const [modules, setModules] = useState<FilterDropdownProps["selections"]>(getModulesFromLevel);

    const [docTypes, setDocTypes] = useState<FilterDropdownProps["selections"]>(getDocTypes);

    return (
        <div
            className={
                "w-full lg:w-200 py-2 px-5 bg-white shadow-md rounded-xl text-dark-text"
            }
        >
            <div className={"flex md:items-center gap-2 "}>
                <div>Filters:</div>
                <div className={"flex flex-col md:flex-row gap-2 w-full"}>
                    <FilterDropdown
                        value={level}
                        onChange={onSelectionChange}
                        type={"level"}
                        selections={levels}
                    />
                    <FilterDropdown
                        value={module}
                        onChange={onSelectionChange}
                        type={"module"}
                        selections={modules}
                    />
                    <FilterDropdown
                        value={docType}
                        onChange={onSelectionChange}
                        type={"type"}
                        selections={docTypes}
                    />
                </div>
            </div>
        </div>
    );
};

export default FilterBar;
