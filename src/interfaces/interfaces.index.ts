import { ChangeEvent, ChangeEventHandler } from "react";

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
    type: string;  //default value/label
    selections: {
        label: string;
        value: string;
    }[];
    onChange: ChangeEventHandler<HTMLSelectElement>
    value: string;
}