import { Dispatch, FunctionComponent, SetStateAction } from "react";
import links from "../NavBar/links";
import { AnimatePresence, motion } from "framer-motion";
import "./Aside.css";

interface AsideProps {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<any>>;
}

//TODO fix SVGs centering
const Aside: FunctionComponent<AsideProps> = ({ isOpen, setIsOpen }) => {
    return (
        <AnimatePresence>
            <motion.div
                onClick={() => {}}
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50 }}
                transition={{ ease: "easeOut" }}
                layout
                className={`aside flex justify-center md:hidden w-full bg-dark-bg pb-6 z-10`}
            >
                <ul className={`list items-center w-10/12 text-white flex flex-col`}>
                    {links.map((link) => {
                        return (
                            <a
                                key={link.full}
                                className="list-item px-16 py-2 my-2 rounded-2xl text-center"
                                href={link.link}
                                onClick={() => {
                                    setIsOpen(!isOpen);
                                }}
                            >
                                <span>{link.full}</span>
                            </a>
                        );
                    })}
                </ul>
            </motion.div>
        </AnimatePresence>
    );
};

export default Aside;
