import { FilterDropdownProps, Module, Semester } from "@/interfaces/interfaces.index";
import modulesArr from "./modules";

/**
 * A function that generates the list of modules based on the selected level
 * @param {string?} level: level dropdown value ("1", "2", ... "5"), if it is not provided, the function will return all modules for all years
 * @returns {FilterDropdownProps["selections"]} Array of filters dropdown selections objects
 * @see FilterDropdownProps
 * */
const getModulesFromLevel = (level?: string): FilterDropdownProps["selections"] => {
    let output: FilterDropdownProps["selections"] = [];

    // if level is provided, return only modules of that level
    if (level) {
        const index = +level - 1; //level can be: "1", "2" ... "5", so we subtract 1 to use it as index of array
        modulesArr[index].semesters.forEach((semester: Semester) => {
            semester.modules.forEach((module: Module) => {
                if (module.name !== "TBA")
                    output.push({ label: module.name, value: module.dropdownValue });
            });
        });
    } else {
        //if level isn't provided, return all modules
        modulesArr.forEach((year) => {
            year.semesters.forEach((semester: Semester) => {
                semester.modules.forEach((module: Module) => {
                    if (module.name !== "TBA")
                        output.push({ label: module.name, value: module.dropdownValue });
                });
            });
        });
    }
    return output;
};

export default getModulesFromLevel;
