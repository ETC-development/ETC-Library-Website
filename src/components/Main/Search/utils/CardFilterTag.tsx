import { FunctionComponent } from "react";

interface FilterTagProps {
    text: string;
}

const CardFilterTag: FunctionComponent<FilterTagProps> = ({text}) => {
    return (
        <div className={"border-2 border-violet rounded-3xl px-2 py-1 text-[10px] md:text-[12px] text-violet font-semibold"}>
            {text}
        </div>
    )
}

export default CardFilterTag;