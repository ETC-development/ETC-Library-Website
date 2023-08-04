import { Dispatch, FunctionComponent, SetStateAction } from "react";
import links from "../NavBar/links";
import { AnimatePresence, motion } from "framer-motion";
import "./Aside.css";

interface AsideProps {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<any>>;
}

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
                <ul
                    className={`list items-center w-full text-white flex flex-col sm:flex-row justify-center`}
                >
                    {links.map((link) => {
                        return (
                            <a
                                key={link.full}
                                className="list-item px-5 py-2 my-2 rounded-2xl text-center"
                                href={link.link}
                                onClick={() => {
                                    setIsOpen(!isOpen);
                                }}
                            >
                                <span>{link.label}</span>
                            </a>
                        );
                    })}
                </ul>
            </motion.div>
        </AnimatePresence>
    );
};

export default Aside;
