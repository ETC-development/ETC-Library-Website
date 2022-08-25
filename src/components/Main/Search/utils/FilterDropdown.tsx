import { FunctionComponent } from "react";
import { FilterDropdownProps } from "interfaces/interfaces.index";

const FilterDropdown: FunctionComponent<FilterDropdownProps> = ({ type, selections, onChange, value }) => {
    return (
        <div className={
            "relative w-full flex justify-center items-center flex-grow text-light-text text-sm font-medium bg-dark-bg rounded-3xl px-2"
        }>
            <select
                name={type}
                onChange={(e) => onChange(e)}
                value={value}
                className={"border-0 bg-transparent w-full cursor-pointer py-2.5 outline-0"}
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