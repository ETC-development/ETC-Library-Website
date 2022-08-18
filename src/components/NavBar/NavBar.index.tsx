import { useState } from "react";
import logo from "../../assets/School Logo.svg";
import links from "./links";
import "./NavBar.css";

export default function NavBar() {
  const [showHamburgerMenu , setShowHamburgerMenu] = useState(false)


  return (
    <nav className="h-[100px] flex justify-between p-6 bg-dark-bg w-full fixed top-0 ">
      <a href="#" className="mt-3">
        <img src={logo} alt="ensia logo" />
      </a>
      <ul className={`${showHamburgerMenu ? "visible" :""}  h-[100vh] w-[100%] md:h-[auto] md:w-[400px] mt-[90px] md:mt-[15px] text-white absolute top-0 left-0 md:relative md:flex bg-dark-bg md:bg-transparent`}>
        {links.map((link , index) => {
          return (
            <li key={index} className="h-[40px] md:h-[auto] py-9 px-8 md:p-0 mx-2 block md:inline md:mt-[5px]">
              <a href={link.url} className='block element'>{link.label}</a>
            </li>
          );
        })}
        <li className="mx-2 h-[40px] text-xl py-6 px-4 text-center md:border-2 md:rounded-xl md:border-secondary md:py-1">
          <a href="#" className="block hover:scale-125 hover:text-secondary ease-in transition-transform transition-colors md:hover:scale-100 md:hover:text-white">Contribute</a>
        </li>
      </ul>

      <div className="h-[60px] w-[60px] md:hidden border-2 border-white flex items-center flex-col justify-center rounded-full cursor-pointer" onClick={()=> setShowHamburgerMenu(prev => !prev)}>
        <div className="bar mt-[0px]"></div>
        <div className="bar mt-[8px]" ></div>
        <div className="bar mt-[8px]"></div>
      </div>
        
    </nav>
  );
}