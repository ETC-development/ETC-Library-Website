import { FunctionComponent } from "react";
import { FilterDropdownProps } from "interfaces/interfaces.index";

const FilterDropdown: FunctionComponent<FilterDropdownProps> = ({
    type,
    selections,
    onDropdownChange,
    value,
}) => {
    return (
        <div
            className={
                "w-full flex justify-center items-center md:w-3/12 text-light-text  text-sm bg-dark-bg rounded-xl px-2"
            }
        >
            <select
                name={type}
                onChange={(e) => onDropdownChange(e)}
                value={value}
                className={"border-0 bg-transparent w-full cursor-pointer py-1.5 outline-0"}
            >
                <option value={""}>{type} (All)</option>
                {selections.map((selection) => (
                    <option key={selection.value} value={selection.value}>
                        {selection.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default FilterDropdown;
