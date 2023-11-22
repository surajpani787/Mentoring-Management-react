import { FcGoogle } from 'react-icons/fc'
import { AiOutlineFacebook } from 'react-icons/ai'
import { AiFillTwitterSquare } from 'react-icons/ai'
import { BsTelegram } from 'react-icons/bs'
import { AiFillYoutube } from 'react-icons/ai'


function Footer() {
    return (
        <div>
            <footer>
                <div className="copy-right">
                    <p>© 2023-{new Date().getFullYear()} All rights reserved. </p>
                </div>
                <div className="quote">
                    <p>"Empowering students through personalized guidance,
						mentorship, and academic support online..." </p>
                </div>
                <div className="f-icons">
                    <FcGoogle />
                    <AiOutlineFacebook />
                    <AiFillTwitterSquare />
                    <BsTelegram />
                    <AiFillYoutube />
                </div>
            </footer>

        </div >
    )
}

export default Footer;