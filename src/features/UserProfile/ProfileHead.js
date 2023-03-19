import { useContext, useState } from "react";
import { AuthContext } from "../../config";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProfileHead({
  setCurrentPage,
  currentPage,
}) {
    const { auth, userData } = useContext(AuthContext);
  const date = userData?.joinDate?.toDate();

    const switchPage = (e) => {
        setCurrentPage(e.target.innerHTML);
    };


  return (
    <div className="profile-head">
      <div className="container">
        <div className="profile-head--wrapper flex-column flex-md-row">
          <img
            src={auth.currentUser.photoURL}
            referrerPolicy="no-referrer"
            className="profile-head--photo"
          />
          <div className="profile-head--body flex-md-row flex-column mt-4 align-items-start align-items-md-center">
            <div className="mb-2">
                <div className="d-flex align-items-center mb-2">
                <h2>{auth.currentUser.displayName}</h2><span class="badge bg-primary">Developer</span>
                </div>
              
              <p>
                Joined in {date?.toLocaleString("default", { month: "long" })},{" "}
                {date?.getFullYear()}
              </p>
              <p>0 Followers | 0 Following</p>
            </div>
            <button className="btn btn-blue">
              <FontAwesomeIcon
                icon="fa-regular fa-pen-to-square"
                className="me-2"
              />
              Edit Profile
            </button>
          </div>
        </div>

        <div className="col-12 profile-link" onClick={switchPage}>
          <Link className={currentPage === "Overview" ? "profile-link--active" : ""}>Overview</Link>
          <Link className={currentPage === "Votes" ? "profile-link--active" : ""}>Votes</Link>
          <Link className={currentPage === "Opinions" ? "profile-link--active" : ""}>Opinions</Link>
          <Link className={currentPage === "Insights" ? "profile-link--active" : ""}>Insights</Link>
          <Link className={currentPage === "Groups" ? "profile-link--active" : ""}>Groups</Link>
          <Link className={currentPage === "Badges" ? "profile-link--active" : ""}>Badges</Link>
        </div>
      </div>
    </div>
  );
}
