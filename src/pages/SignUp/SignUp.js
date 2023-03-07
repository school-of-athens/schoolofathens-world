
import { google } from "../../projectFiles";


export default function SignUp({setMode}) {

    const verifyEmail = () => {
        setMode("EMAIL_VERIFICATION");
    };

    return (
        <>
            <div className="row signUp">
                <div className="col-lg-7 col-md-5 hidden">
                    <div className="img-caption">
                    Peter von Hess. <i>The Entry of King Othon of Greece in Athens.</i>
                    </div>
                        
                </div>
                <div className="col-lg-5 col-md-7 col-12 signUp--form px-5">
                        <h1>Sign Up</h1>
                        <button type="button" class="btn btn-grey signUp--google">
                            <img src={google} height="18" width="18" />
                            Sign up with Google
                        </button>

                        <div className="signUp--divide">
                            <hr />
                            Or sign up with email
                            <hr />
                        </div>

                        <label for="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                        <label for="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="your password" />
                        <button type="button" class="btn btn-blue signUp--btn" onClick={verifyEmail}>Sign Up</button>
                </div>

            </div>
        </>
    );
};