import { FaElementor } from 'react-icons/fa'
import { PiStudent} from 'react-icons/pi'
import { VscFeedback } from 'react-icons/vsc'
import { RiHotelLine} from 'react-icons/ri'
import Footer from '../pages/Footer';
function Dashboard() {
    return (
        <div>
            <div className='heading'>
                <h2>Admin-Dashboard</h2>
            </div>
            <div className="dashboard">


                <div className="card">
                    <div className='icon'>
                        <FaElementor />
                    </div>
                    <h3>Mentor</h3>
                    <p>2</p>
                </div>


                <div className="card">
                    <div className='icon'>
                    <PiStudent />
                    </div>
                    <h3>Mentee</h3>
                    <p>3</p>
                </div>


                <div className="card">
                    <div className='icon'>
                    <VscFeedback />
                    </div>
                    <h3>Feedback</h3>
                    <p>2</p>
                </div>


                <div className="card">
                    <div className='icon'>
                        <RiHotelLine />
                    </div>
                    <h3>Hostel Outing</h3>
                    <p>4</p>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Dashboard;