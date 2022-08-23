import React from "react";
import links from "../NavBar/links";
import hbMenu from "../../assets/hamburger.svg";
import xmark from "../../assets/xmark.svg";

export default function Aside() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="flex flex-end items-center">
      <button
        className="md:hidden fixed items-center justify-center p-2 top-5 right-5 z-10"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src={isOpen ? xmark : hbMenu} alt="click" />
      </button>
      <div
        id="side-menu"
        className={`md:hidden fixed pt-20 top-0 right-0 w-3/5 p-6 bg-dark-bg shadow-[0_0_4px_4px_rgba(0,0,0,.2)] ${
          isOpen ? "-translate-y-0" : "-translate-y-full"
        } ease-in-out duration-300`}
      >
        <ul className={`items-center text-white flex flex-col`}>
          {links.map((link) => {
            return (
              <li
                className="mx-2 w-full border-b-2 border-secondary text-center p-2 hover:border-2 hover:bg-secondary"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                <a href={link.link}>{link.label}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
