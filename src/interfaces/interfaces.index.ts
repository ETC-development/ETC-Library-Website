export interface Module {
    name: string;
    url: string;
    description?: string; //might add description to show as a tooltip when hovering the module
}

export interface Semester {
    title: string;
    modules: Module[];
}

export interface Year {
    title: string;
    semesters: Semester[];
}
