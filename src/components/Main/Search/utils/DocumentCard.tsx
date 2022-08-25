import CardFilterTag from "./CardFilterTag";

const DocumentCard = () => {
    return (
        <a
            href={"https://drive.google.com/file/d/1k8WiZDPTLAmXppIhotGqps-PFCOwajPX/view"} target={"_blank"}
            className={
                "doc-card flex flex-grow w-full hover:shadow-[0_0.5px_3px_0_rgba(0,0,0,0.25)] items-center border border-grey-stroke hover:border-violet rounded-xl my-2"
            }
        >
            <div
                className={
                    "doc-card-info flex flex-col gap-2 justify-between flex-grow px-2 md:px-5 py-2"
                }
            >
                <div className={"doc-title text-md px-2 md:p-0"}>
                    <span>
                        1-Formule du Taylor et Développement Limité 2022.pdf
                    </span>
                </div>
                <div className={"flex items-end justify-between"}>
                    <div className={"filter tags flex flex-wrap gap-2 text-[14px]"}>
                        <CardFilterTag text={"First Preparatory Cycle"} />
                        <CardFilterTag text={"Semester 1"} />
                        <CardFilterTag text={"Algebra 1"} />
                        <CardFilterTag text={"Exams"} />
                    </div>
                    <div className={"text-dark-text opacity-50"}>1/200</div>
                </div>
            </div>
        </a>
    );
};

export default DocumentCard