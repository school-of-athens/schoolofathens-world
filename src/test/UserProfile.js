import { NavLink } from "react-router-dom";
import { plato } from "../projectFiles";
import "./UserProfile.css";

export default function UserProfile() {
  return (
    <>
      <div className="user-profile">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12 user-profile--title">
              <img src={plato} className="user-profile--photo" />
            </div>
            <div className="col-lg-8 col-md-6 col-12 user-profile--name">
              <h2>User Name</h2>
              <p>Joined in March 2023</p>
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
          <NavLink>Votes</NavLink>
          <NavLink>Opinions</NavLink>
          <NavLink>Insights</NavLink>
          <NavLink disabled>Badges</NavLink>
        </div>
        <div className="col-lg-9 col-md-8 col-12 user-history--display">
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckCheckedDisabled"
              
              disabled
            />
            <label
              class="form-check-label"
              for="flexSwitchCheckCheckedDisabled"
            >
              Make your vote records public
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
