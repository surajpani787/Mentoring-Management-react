import { FaElementor } from 'react-icons/fa'
import Footer from '../pages/Footer';
function MenteeDash (){
    return(
        <div>
              <div className='heading'>
                <h2>Dashboard</h2>
            </div>
            <div className="dashboard">


                <div className="card">
                    <div className='icon'>
                        <FaElementor />
                    </div>
                    <h3>Mentor-Assigned</h3>
                    <p>XYZ</p>
                </div>


          
            </div>

            <Footer />
        </div>
    )
}

export default MenteeDash;