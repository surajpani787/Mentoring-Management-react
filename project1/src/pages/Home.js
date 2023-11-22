import Bgvideo from '../assets/BGVideo.mp4'
import img1 from '../images/Home2.png'
import img2 from '../images/img5.png'
import img3 from '../images/Learn.webp'
import img4 from '../images/hostel.png'
import Footer from './Footer'
function Home() {
    return (
        <div>
            <div className="hero-video">
                <video autoPlay loop muted playsInline>
                    <source src={Bgvideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="content">
                    <h1>Welcome to Mentoring</h1>
                    <p>Student-Mentoring: Nurturing Student Success Through Personalized Mentoring..."</p>
                </div>
            </div>
            
            <div className='Hero'>
                <div className='img'>
                    <img src={img1} alt='img' />
                </div>
                <div className='intro'>
                    <h3>Mentoring-Management</h3>
                    <p>
                        A mentoring management system is a software solution or framework designed to facilitate and optimize the process of mentoring within an organization or educational institution. This system streamlines the entire mentoring lifecycle, from matching mentors and mentees to tracking progress and assessing outcomes. It plays a crucial role in ensuring that mentorship programs are efficient, effective, and scalable. Here, we'll explore the key components and benefits of a mentoring management system.</p>
                </div>
            </div>
   
            <div className='Hero2'>
                <div className='img'>
                    <img src={img2} alt='img' />
                </div>
                <div className='intro'>
                    <h3>Mentoring-Management</h3>
                    <p>
                        A mentoring management system is a software solution or framework designed to facilitate and optimize the process of mentoring within an organization or educational institution. This system streamlines the entire mentoring lifecycle, from matching mentors and mentees to tracking progress and assessing outcomes. It plays a crucial role in ensuring that mentorship programs are efficient, effective, and scalable. Here, we'll explore the key components and benefits of a mentoring management system.</p>
                </div>
            </div>
      
            <div className='Hero3'>
                <div className='img'>
                    <img src={img3} alt='img' />
                </div>
                <div className='intro'>
                    <h3>Mentoring-Management</h3>
                    <p>
                        A mentoring management system is a software solution or framework designed to facilitate and optimize the process of mentoring within an organization or educational institution. This system streamlines the entire mentoring lifecycle, from matching mentors and mentees to tracking progress and assessing outcomes. It plays a crucial role in ensuring that mentorship programs are efficient, effective, and scalable. Here, we'll explore the key components and benefits of a mentoring management system.</p>
                </div>
            </div>
    
            <div className='Hero4'>
                <div className='img'>
                    <img src={img4} alt='img' />
                </div>
                <div className='intro'>
                    <h3>Mentoring-Management</h3>
                    <p>
                        A mentoring management system is a software solution or framework designed to facilitate and optimize the process of mentoring within an organization or educational institution. This system streamlines the entire mentoring lifecycle, from matching mentors and mentees to tracking progress and assessing outcomes. It plays a crucial role in ensuring that mentorship programs are efficient, effective, and scalable. Here, we'll explore the key components and benefits of a mentoring management system.</p>
                </div>
            </div>
           
           <Footer/>

        </div>
    )
}

export default Home;