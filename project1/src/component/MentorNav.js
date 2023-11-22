import { Routes, Route, NavLink, Link } from "react-router-dom";
import Mentordashboard from "../Mentorpages/MentorDash"
import Menteedet from "../Mentorpages/Menteedet"
import MenteeFeedback from "../Mentorpages/MenteeFeedback";
import Outings from "../Mentorpages/Outings"
import { FaBars } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { PiStudent } from 'react-icons/pi';
import { RiDashboardFill } from 'react-icons/ri';
import { VscFeedback } from 'react-icons/vsc';
import { VscSignOut } from 'react-icons/vsc';
import { RiHotelLine } from 'react-icons/ri'
// import { RiHotelLine } from 'react-icons/ri'
import { useState } from "react";
import Hostel from "../Mentorpages/Outings";
function MentorNav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Initialize menu state

    // const toggleMenu = () => {
    //   setIsMenuOpen(!isMenuOpen); // Toggle the menu state
    // };

    return (

        <div className="MentorNav">

            <nav>
                <p>Student-Connect</p>
                <ul className={isMenuOpen ? "nav-links-isMenuOpen" : "nav-links"} onClick={() => setIsMenuOpen(false)}>
                    <li>
                        <NavLink to="/" className="nav-item" ><RiDashboardFill />DashBosrd</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Mentee-List" className="nav-item"><PiStudent /> Mentee-det</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Feedback" className="nav-item"><VscFeedback /> Feedback</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Hostel" className="nav-item"><RiHotelLine />Outing</NavLink>
                    </li>
                    <li>
                        <Link to="/" className="nav-item"><VscSignOut /> Sign-Out</Link>
                    </li>
                </ul>
                <button className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <ImCross /> : <FaBars />}
                </button>
            </nav>
            <Routes>
                <Route path="/" element={<Mentordashboard />}></Route>
                <Route path="/menteedet" element={<Menteedet />}></Route>
                <Route path="/feedback" element={<MenteeFeedback />}></Route>
                <Route path="/hostel" element={<Hostel />}></Route>
            </Routes>
        </div >

    )
}

export default MentorNav;