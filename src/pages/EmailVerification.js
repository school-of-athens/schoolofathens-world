import "../assets/styles/join.css";

import Navbar from "../components/Navbar";
import SignupForm from "../components/SignupForm";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'

export default function () {
    return (
        <>
            <Navbar />
            
            <div className="container verify">
                <div className="icon_wrapper">
                    <FontAwesomeIcon icon={faEnvelopeOpenText} />
                </div>

                <h3>Please verify your email</h3>
                <p>Check your inbox! We sent an email verification link to name@example.com</p>

                <button type="button" class="btn verify--verified-btn">I verified my email</button>
                <button type="button" class="btn verify--resend-btn">Resend verification email</button>
            
            </div>

            <Footer />
        </>
    );
};