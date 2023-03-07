import "../assets/styles/join.css";

import Navbar from "../components/Navbar";
import SignupForm from "../components/SignupForm";
import Footer from "../components/Footer";

export default function () {
    return (
        <>
            <Navbar />
            <div className="row sign_up">
                <div className="col-lg-7 col-md-5 col-0">
                    <div className="img_caption">
                    Peter von Hess. <i>The Entry of King Othon of Greece in Athens.</i>
                    </div>
                        
                </div>
                <div className="col-lg-5 col-md-7 col-12 sign_up--form px-5">
                        <h1>Sign Up</h1>
                        <button type="button" class="btn sign_up--google_btn">
                            <img src="https://firebasestorage.googleapis.com/v0/b/school-of-athens-122422.appspot.com/o/projectFiles%2Fimages%2Fgoogle_logo.svg?alt=media&token=9b140921-6897-43eb-a4bc-55e4db9a98ec" height="18" width="18" />
                            Sign up with Google
                        </button>

                        <div className="sign_up--divide">
                            <hr />
                            Or sign up with email
                            <hr />
                        </div>

                        <label for="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                        <label for="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="your password" />
                        <button type="button" class="btn sign_up--btn">Sign Up</button>
                </div>

            </div>
            <Footer />
        </>
    );
};