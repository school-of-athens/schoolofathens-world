import { useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import { AuthContext } from "../../config";
import "./UserProfile.css";

export default function UserProfile() {

  const { userId } = useParams();
  const { auth, userData } = useContext(AuthContext);
  const date = userData?.joinDate?.toDate();

  if (auth?.currentUser?.uid === userId) {
    return (
      <>
        <div className="user-profile">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12 user-profile--title">
                <img src={auth.currentUser.photoURL} className="user-profile--photo" referrerPolicy="no-referrer" />
              </div>
              <div className="col-lg-8 col-md-6 col-12 user-profile--name">
                <h2>{auth.currentUser.displayName}</h2>
                <p>Joined in {date?.toLocaleString('default', { month: 'long' })}, {date?.getFullYear()}</p>
                <div className="user-profile--follow">
                  <p>0 Followers | 0 Following</p>
                  <button className="btn btn-grey" disabled>
                    Follow <i>(disabled)</i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="user-history row">
          <div className="col-lg-2 col-md-3 col-12 user-history--categories">
            <NavLink>Profile</NavLink>
            <NavLink>Votes</NavLink>
            <NavLink>Opinions</NavLink>
            <NavLink>Insights</NavLink>
            <NavLink disabled>Badges</NavLink>
          </div>
          <div className="col-lg-9 col-md-8 col-12 user-history--display">
            {/* <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckCheckedDisabled"
                
                disabled
              />
              <label
                className="form-check-label"
                for="flexSwitchCheckCheckedDisabled"
              >
                Make your vote records public
              </label>
            </div> */}
            <p>
              {userData?.profile}
            </p>
          </div>
        </div>
      </>
    );
  }
  else {
    return (
      <h1 className="text-center">Restricted</h1>
    );
  }


  
}
