import CardFilterTag from "./CardFilterTag";
import { FunctionComponent, RefObject } from "react";
import { DocumentInfo } from "../../../../interfaces/interfaces.index";
import { AnimatePresence, motion } from "framer-motion";

interface DocumentCardProps {
    doc: DocumentInfo;
    index: number;
    totalResults: number;
    docRef: RefObject<HTMLAnchorElement>;
}

const DocumentCard: FunctionComponent<DocumentCardProps> = ({
    doc,
    index,
    totalResults,
    docRef,
}) => {
    return (
        <AnimatePresence>
            <motion.a
                ref={docRef}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scaleY: 0 }}
                href={`https://drive.google.com/file/d/${doc.url}/view`}
                target={"_blank"}
                className={
                    "doc-card flex flex-grow w-full hover:bg-light-bg items-center hover:border-violet rounded-xl my-2"
                }
            >
                <div
                    className={
                        "doc-card-info flex flex-col gap-2 justify-between flex-grow px-2 md:px-5 py-2"
                    }
                >
                    <div className={"doc-title text-md px-2 md:p-0"}>
                        <span>{doc.name}</span>
                    </div>
                    <div className={"flex items-end justify-between"}>
                        <div className={"filter tags flex flex-wrap gap-2 text-[14px]"}>
                            <CardFilterTag text={`Preparatory Cycle ${doc.year}`} />
                            <CardFilterTag text={`Semester ${doc.semester}`} />
                            <CardFilterTag text={doc.module} />
                            {doc.submodule && <CardFilterTag text={doc.submodule} />}
                            {/* we slice doc.type to remove last character which is an "s" of plural: exams => exam  */}
                            <CardFilterTag text={doc.type.slice(0, -1)} />
                        </div>
                        <div className={"text-dark-text opacity-50"}>{`${
                            index + 1
                        }/${totalResults}`}</div>
                    </div>
                </div>
            </motion.a>
        </AnimatePresence>
    );
};

export default DocumentCard;
