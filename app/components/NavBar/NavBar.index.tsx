"use client"


import Image from "next/image";

import links from "./links";
import "./NavBar.css";
import Aside from "../Aside/Aside.index";
import { useEffect, useState } from "react";
// import { ReactComponent as Xmark } from "../../assets/close.svg";
// import { ReactComponent as HbMenu } from "../../assets/bars.svg";
import { motion } from "framer-motion";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSmall, setIsSmall] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", () => {
                setIsSmall(window.scrollY > 200);
            });
        }
    }, []);

    return (
        <nav className={"w-full fixed z-10 top-0"}>
            <motion.div className="bg-dark-bg flex justify-between items-center px-5 py-1 md:py-2.5 md:px-16 lg:px-36">
                <div
                    className={`${isSmall ? "w-14 transition-all" : "w-14 md:w-20 transition-all"}`}
                >
                    <Image src="/logo.svg" width={300} height={100} alt="ETC Logo" />
                    {/* <img alt={"logo"} src={Logo} width={300} height={100} /> */}
                </div>
                {/*<span className={"text-light-text font-semibold text-2xl"}>*/}
                {/*    ENSIA <span className={"text-secondary"}>BIB</span>*/}
                {/*</span>*/}
                <button className="md:hidden p-2 w-12 z-10" onClick={() => setIsOpen(!isOpen)}>
                    <Image width={30} height={30} alt="aside" src={isOpen ? "/close.svg" : "/bars.svg"} />
                    {/* {isOpen ? <Xmark /> : <HbMenu />} */}
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
