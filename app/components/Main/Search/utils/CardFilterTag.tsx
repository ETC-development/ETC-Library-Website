import { FunctionComponent } from "react";

interface FilterTagProps {
    text: string;
}

const CardFilterTag: FunctionComponent<FilterTagProps> = ({ text }) => {
    return (
        <div
            className={
                "border border-dark-violet rounded-3xl px-2 py-1 text-[10px] md:text-[13px] text-dark-violet font-medium"
            }
        >
            {text}
        </div>
    );
};

export default CardFilterTag;
