import "../assets/styles/login.css";
import Navbar from "../components/Navbar";
import LoginForm from "../components/LoginForm";
import Footer from "../components/Footer";

export default function() {
    return (
        <>
            <Navbar />
            {/* <div className="progress_bar">

            </div> */}
            <div className="sign_in">
                <div className="img_caption">
                    Edward Dodwell. <i>Bazar of Athens.</i>
                </div>
                <div className="sign_in--form px-lg-5 px-2">
                    <h1>Sign Up</h1>
                    <button type="button" class="btn sign_up--google_btn">
                        <img src="https://firebasestorage.googleapis.com/v0/b/school-of-athens-122422.appspot.com/o/projectFiles%2Fimages%2Fgoogle_logo.svg?alt=media&token=9b140921-6897-43eb-a4bc-55e4db9a98ec" height="18" width="18"/>
                        Sign in with Google
                    </button>

                    <div className="sign_up--divide">
                        <hr />
                        Or sign in with email
                        <hr />
                    </div>

                    <label for="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                    <label for="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="your password" />
                    <button type="button" class="btn sign_in--btn">Sign In</button>
                    <button type="button" class="btn sign_in--forget_password">Don't remember your password?</button>
                </div>
            </div>
            <Footer />
        </>
    );
};