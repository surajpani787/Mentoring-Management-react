import { Routes, Route, NavLink, Link } from "react-router-dom";
import MenteeDash from "../Menteepages/MenteeDash"
import Review from "../Menteepages/Review"
import HostelOuting from "../Menteepages/Ho";
import { FaBars } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { RiDashboardFill } from 'react-icons/ri';
import { VscFeedback } from 'react-icons/vsc';
import { VscSignOut } from 'react-icons/vsc';
import { RiHotelLine } from 'react-icons/ri'
import { useState } from "react";
function MenteeNav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Initialize menu state

    // const toggleMenu = () => {
    //   setIsMenuOpen(!isMenuOpen); // Toggle the menu state
    // };

    return (

        <div className="MenteeNav">

            <nav>
                <p>Student-Connect</p>
                <ul className={isMenuOpen ? "nav-links-isMenuOpen" : "nav-links"} onClick={() => setIsMenuOpen(false)}>
                    <li>
                        <NavLink to="/" className="nav-item" ><RiDashboardFill />DashBosrd</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Review" className="nav-item"><VscFeedback /> Feedback</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Ho" className="nav-item"><RiHotelLine />Hostel-Outing</NavLink>
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
                <Route path="/" element={<MenteeDash />}></Route>
                <Route path="/review" element={<Review />}></Route>
                <Route path="/ho" element={<HostelOuting />}></Route>
            </Routes>
        </div >

    )
}

export default MenteeNav;