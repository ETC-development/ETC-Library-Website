import { Semester } from "interfaces/interfaces.index";
import { FunctionComponent } from "react";

interface SemesterCardProps {
    semester: Semester;
}

const SemesterCard: FunctionComponent<SemesterCardProps> = ({ semester }) => {
    return (
        <div className="w-full my-2 md:w-[45%] shadow-[1px_1px_3px_3px_rgba(185,185,185,0.23)] rounded-xl">
            <div className="cardContentTop p-4 w-full border-b border-grey-stroke flex justify-center items-center ">
                <p className="text-[18px] lg:text-md">{semester.title}</p>
            </div>

            <div className="cardContentButtom p-4 flex flex-col">
                {semester.modules.map((m) => (
                    <li key={m.dropdownValue} className="module">
                        <a href={m.url} target={"_blank"}>
                            {m.name}
                        </a>
                    </li>
                ))}
            </div>
        </div>
    );
};

export default SemesterCard;
