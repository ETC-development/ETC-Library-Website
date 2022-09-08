import { ReactComponent as Logo } from "../../assets/School Logo.svg";
import links from "./links";
import "./NavBar.css";
import Aside from "../Aside/Aside.index";
import { useState } from "react";
import { ReactComponent as Xmark } from "../../assets/close.svg";
import { ReactComponent as HbMenu } from "../../assets/bars.svg";
import { motion } from "framer-motion";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={"w-full fixed z-10 top-0"}>
            <motion.div className="bg-dark-bg flex justify-between items-center px-5 py-1 md:py-2.5 md:px-16 lg:px-36">
                <a className={"w-2"} href="https://ensia.edu.dz/">
                    <Logo />
                </a>
                <button className="md:hidden p-2 w-12 z-10" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <Xmark /> : <HbMenu />}
                </button>

                <ul
                    className="md:flex hidden justify-evenly items-center text-white"
                    id="main-menu"
                >
                    {links.map((link, index) => {
                        return (
                            <li key={index} className="mx-3 text-[18px]">
                                <a
                                    className={" hover:border-b hover:border-b-secondary"}
                                    href={link.link}
                                >
                                    {link.label}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </motion.div>
            {isOpen && (
                <aside>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setIsOpen(false)}
                        className={"fixed h-full w-full bg-[rgba(0,0,0,0.5)] z-[-1]"}
                    ></motion.div>
                    <Aside isOpen={isOpen} setIsOpen={setIsOpen} />
                </aside>
            )}
        </nav>
    );
}
