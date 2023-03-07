import "./SignIn.css";
import { google } from "../../projectFiles";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function() {

    const navigate = useNavigate();
    
    return (
            <div className="signIn">
                <div className="img-caption">
                    Edward Dodwell. <i>Bazar of Athens.</i>
                </div>
                <div className="signIn--form px-lg-5 px-2">
                    <h1>Sign Up</h1>
                    <button type="button" class="btn btn-grey signIn--google-btn">
                        <img src={google} height="18" width="18"/>
                        Sign in with Google
                    </button>

                    <div className="signIn--divide">
                        <hr />
                        Or sign in with email
                        <hr />
                    </div>

                    <label for="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                    <label for="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="your password" />
                    <button type="button" class="btn btn-blue" onClick={() => navigate("/profile")}>Sign In</button>
                    <button type="button" class="btn signIn--forget_password">Don't remember your password?</button>
                </div>
            </div>
    );
};