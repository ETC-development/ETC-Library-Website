import React from "react";
import Aside from "../Aside/Aside.index"
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

      <ul className="hidden justify-evenly items-center text-white md:flex" id="main-menu">
        {links.map((link) => {
          return (
            <li className="mx-2 hover:font-bold">
              <a href={link.link}>{link.label}</a>
            </li>
          );
        })}
      </ul>
        
    </nav>
  );
}
