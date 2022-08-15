import React from "react";
import logo from "../../assets/School Logo.svg";
import hbMenu from "../../assets/hamburger.svg";
import links from "./links";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="flex justify-between p-6 bg-dark-bg w-full fixed inset-x-0 top-0">
      <a href="#">
        <img src={logo} alt="ensia logo" />
      </a>
      <ul className="flex justify-evenly items-center text-white hidden md:flex">
        {links.map((link) => {
          return (
            <li className="mx-2">
              <a href={link.link}>{link.label}</a>
            </li>
          );
        })}
      </ul>

      <div className="hb md:hidden flex items-center justify-center">
        <img src={hbMenu} alt="hamburger menu" />
      </div>
        
    </nav>
  );
}
