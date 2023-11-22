import { Routes, Route, NavLink } from "react-router-dom";
import Home from "../pages/Home"
import About from "../pages/About"
import SignUP from "../pages/SignUP";
import Signin from "../pages/Signin";
import { FaBars } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { AiFillHome } from 'react-icons/ai';
import { FcAbout } from 'react-icons/fc';
import { VscSignIn } from 'react-icons/vsc';
import { SiGnuprivacyguard } from 'react-icons/si';
import { useState } from "react";
import RoleNav from "./Navugation";
function Nav(){
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Initialize menu state

    // const toggleMenu = () => {
    //   setIsMenuOpen(!isMenuOpen); // Toggle the menu state
    // };

    return (

        <div className="Nav">

            <nav>
                <p>Student-Connect</p>
                <ul className={isMenuOpen ? "nav-links-isMenuOpen" : "nav-links"}  onClick={() =>  setIsMenuOpen(false)}>
                    <li>
                        <NavLink to="/" className="nav-item" ><AiFillHome/> Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/About" className="nav-item"><FcAbout/> About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Signin" className="nav-item"><VscSignIn/> Sign-In</NavLink>
                    </li> <li>
                        <NavLink to="/SignUP" className="nav-item"><SiGnuprivacyguard/> Sign-UP</NavLink>
                    </li>
                </ul>
                <button className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    { isMenuOpen ? <ImCross /> : <FaBars />}
                </button>
            </nav>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/signin" element={<Signin />}></Route>
                <Route path="/signup" element={<SignUP />}></Route>
            </Routes>

            <RoleNav />
        </div >

    )
}

export default Nav;