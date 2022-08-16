import "./Footer.css"

// importing maiN pictures of the footer
import Computer from "../../assets/computer.svg"
import math from "../../assets/math.svg"
import Logo from './utils/ETC Logo.png'

// importing the icons
import  github  from './utils/github.png';
import heart from "./utils/heart.png"
import facebook from './utils/facebook.png'
import instagram from './utils/instagram.png'
import email from './utils/email.png'
import linkedin from './utils/linkedin.png'
import document from './utils/file-document.png'

// importing the wave background
import Wave from "./utils/Wave";

const Footer: React.FunctionComponent = () => {
    return ( 
    <div className="h-auto w-full">
        <Wave />
        <div className="second h-full w-full bg-dark-bg flex flex-col text-center items-center py-10 ">
            <h1 className="text-3xl text-light-text tracking-widest font-semibold ">Contribute</h1>
            <div className="w-11/12  h-72 mt-[120px] md:mt-[50px] flex flex-col md:flex-row items-center justify-evenly md:justify-between">
                <div>
                    <img src={Computer} alt="computer image" className="hidden md:inline"/>
                    <a href="https://github.com/ETC-development/ETC-Library-Website" className="w-[250px] md:w-[220px]  flex justify-center content-center px-2 py-1 mt-2 border-2 text-light-text rounded-xl border-violet">
                        <img src={github} alt="github" className="h-7 w-7 violet-text mr-6 md:mr-3"/>
                        Contribute on Github 
                    </a>
                </div>
                <div className="mt-10 text-center md:mt-[170px]">
                    <h1 className="flex text-light-text text-2xl justify-center tracking-widest">Made with <img src={heart} alt="love" className="mx-2 w-8"/> by</h1>
                    <img src={Logo} alt="ETC logo" className="h-60 w-54" />
                    <div className="flex justify-center">
                        <a href="https://web.facebook.com/ensia.tech.community/">
                            <img src={facebook} alt="facebook" className="h-7 w-7"/>
                        </a>
                        <a href="https://www.instagram.com/etc_.club/">
                            <img src={instagram} alt="instagram" className="h-7 w-7"/>
                        </a>
                        <a href="https://www.linkedin.com/company/ensia-tech-community/?originalSubdomain=dz">
                            <img src={linkedin} alt="linked in" className="h-7 w-7"/>
                        </a>
                        <a href="https://www.google.com/intl/fr/gmail/about" className="last">
                            <img src={email} alt="email" className="h-7 w-7"/>
                        </a>
                    </div>
                </div>
                <div>
                    <img src={math} alt="computer image" className="hidden md:inline md:mb-[20px]"/>
                    <a href="TODO" className="w-[250px] md:w-[220px] md:mb-[13px] flex justify-center content-center px-2 py-1 mt-10 md:mt-[0px] border-2 text-light-text rounded-xl border-violet">
                        <img src={document} alt="github" className="h-7 w-7 violet-text mr-8 md:mr-5"/>
                        <p>Submit documents</p>
                    </a>
                </div>
            </div>
            <div className="mt-[140px]">
                <p className="text-grey-text">
                    All rights Reserved 2022
                </p>
                <a href="TODO">
                    <p className="text-grey-text">
                    License Information
                    </p> 
                </a>
            </div>           
        </div>
    </div>
    );
}
 
export default Footer;