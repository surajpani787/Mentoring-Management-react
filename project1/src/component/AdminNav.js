import { Routes, Route, NavLink, Link } from "react-router-dom";
import Dashboard from "../Adminpages/Dashboard"
import AddMentor from "../Adminpages/AddMentor"
import MentorList from "../Adminpages/Mentor-list";
import MenteeList from "../Adminpages/Mentee-list";
import Hostel from "../Adminpages/Hostel";
import { FaBars } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { FaElementor } from 'react-icons/fa';
import { PiStudent } from 'react-icons/pi';
import { RiDashboardFill } from 'react-icons/ri';
import { VscFeedback } from 'react-icons/vsc';
import { VscSignOut } from 'react-icons/vsc';
import { RiHotelLine } from 'react-icons/ri'
import { useState } from "react";
import Feedbacklist from "../Adminpages/Feedback";
function AdminNav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Initialize menu state

    // const toggleMenu = () => {
    //   setIsMenuOpen(!isMenuOpen); // Toggle the menu state
    // };

    return (

        <div className="AdminNav">

            <nav>
                <p>Student-Connect</p>
                <ul className={isMenuOpen ? "nav-links-isMenuOpen" : "nav-links"} onClick={() => setIsMenuOpen(false)}>
                    <li>
                        <NavLink to="/" className="nav-item" ><RiDashboardFill /> DashBoard</NavLink>
                    </li>
                    <li>
                        <NavLink to="/AddMentor" className="nav-item"><FaElementor /> AddMentor</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Mentor-list" className="nav-item"><FaElementor /> Mentor-List</NavLink>
                    </li> <li>
                        <NavLink to="/Mentee-list" className="nav-item"><PiStudent /> Mentee-List</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Feedback-list" className="nav-item"><VscFeedback /> Feedback</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Hostel" className="nav-item"><RiHotelLine />HostelOuting</NavLink>
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
                <Route path="/" element={<Dashboard />}></Route>
                <Route path="/addmentor" element={<AddMentor />}></Route>
                <Route path="/mentor-list" element={<MentorList />}></Route>
                <Route path="/mentee-list" element={<MenteeList />}></Route>
                <Route path="/feedback" element={<Feedbacklist />}></Route>
                <Route path="/hostel" element={<Hostel/>}></Route>
            </Routes>
        </div >

    )
}

export default AdminNav;