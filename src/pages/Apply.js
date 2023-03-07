import "../assets/styles/join.css";

import Navbar from "../components/Navbar";
import SignupForm from "../components/SignupForm";
import Footer from "../components/Footer";

export default function () {
    return (
        <>
            <Navbar />
            <div className="container set_up px-md-5 px-2">
                <h1>Set up your profile</h1>
                <div className="row">
                    <div className="col-12">
                        <div className="profile_photo"></div>
                    </div>
                    <div className="col-12">
                        <label for="photo" class="form-label">Pick a profile photo</label>
                        <input class="form-control" type="file" id="photo" />
                    </div>
                    <div className="col-md-6 col-12">
                        <label for="firstname" className="form-label">What's your firstname?</label>
                        <input type="email" className="form-control" id="firstname" placeholder="Your firstname" />
                    </div>
                    <div className="col-md-6 col-12">
                        <label for="lastname" className="form-label">What's your lastname?</label>
                        <input type="email" className="form-control" id="lastname" placeholder="Your lastname" />
                    </div>
                    <div className="col-12">
                        <label for="profile" class="form-label">Public Bio</label>
                        <textarea class="form-control" id="profile" rows="10"></textarea>
                    </div>
                    <div className="col-12 text-center">
                        <button type="button" class="btn submit--btn px-4">Submit</button>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    );
};