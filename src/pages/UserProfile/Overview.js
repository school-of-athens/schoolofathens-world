import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { AuthContext } from "../../config";
import { acropolisAtAthens } from "../../project-files";

export default function Overview() {
  const { auth, userData } = useContext(AuthContext);

  return (
    <div className="profile-body container">
      <div className="row">
        <div className=" col-md-4 col-12">
          <div className="profile-body--section">
            <h3>About me</h3>
            <div className="profile-body--card">
              <p>{userData?.profile}</p>
            </div>
          </div>
          <div className="profile-body--section">
            <h3>Stats</h3>
            <div className="profile-body--card" id="stats">
              <p>
                <FontAwesomeIcon
                  icon="fa-solid fa-thumbs-up"
                  className="icon-grey"
                />
                0 Upvotes
              </p>
              <p>
                <FontAwesomeIcon
                  icon="fa-solid fa-check-to-slot"
                  className="icon-grey"
                />
                0 Votes
              </p>
              <p>
                <FontAwesomeIcon
                  icon="fa-solid fa-comment-dots"
                  className="icon-grey"
                />
                0 Opinions
              </p>
              <p>
                <FontAwesomeIcon
                  icon="fa-solid fa-feather"
                  className="icon-grey"
                />
                0 Insights
              </p>
              <div
                className="progress"
                role="progressbar"
                aria-label="Warning striped example"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className="progress-bar progress-bar-striped bg-warning"
                  style={{ width: "10%" }}
                ></div>
              </div>
              <p>0 Points to the next level ()</p>
            </div>
          </div>
          <div className="profile-body--section">
            <h3>Following</h3>
            <div className="profile-body--card">
              <p>Currently Not Available</p>
            </div>
          </div>
          <div className="profile-body--section">
            <h3>Followers</h3>
            <div className="profile-body--card">
              <p>Currently Not Available</p>
            </div>
          </div>
          <div className="profile-body--section">
            <h3>Badges</h3>
            <div className="profile-body--card">
              <p>Currently Not Available</p>
            </div>
          </div>
        </div>
        <div className="col-md-8 col-12">
          <div className="profile-body--section">
            <h3>Votes</h3>
            <div className="profile-body--card" id="votes">
              <div className="profile-body--vote flex-column flex-md-row">
                <p className="fw-bold">Is Democracy a Means or an End?</p>
                <p>
                  Voted <b>An End</b>
                </p>
              </div>
              <div className="profile-body--vote flex-column flex-md-row">
                <p className="fw-bold">Is Democracy a Means or an End?</p>
                <p>
                  Voted <b>An End</b>
                </p>
              </div>
              <div className="profile-body--vote flex-column flex-md-row">
                <p className="fw-bold">Is Democracy a Means or an End?</p>
                <p>
                  Voted <b>An End</b>
                </p>
              </div>
              <div className="profile-body--vote flex-column flex-md-row">
                <p>Load More...</p>
              </div>
            </div>
          </div>
          <div className="profile-body--section">
            <h3>Opinions</h3>
            <div className="row">
              <div className="col-lg-6 col-12">
                <div className="profile-body--opinion">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                  <div className="profile-body--info">
                    <span>Date</span>
                    <span>
                      <FontAwesomeIcon
                        icon="fa-solid fa-thumbs-up"
                        className="icon-grey"
                      />
                      0 Upvotes
                    </span>
                  </div>
                </div>
                <div className="profile-body--opinion">
                  <h5>Subtitle</h5>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                  <div className="profile-body--info">
                    <span>Date</span>
                    <span>
                      <FontAwesomeIcon
                        icon="fa-solid fa-thumbs-up"
                        className="icon-grey"
                      />
                      0 Upvotes
                    </span>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-12">
                <div className="profile-body--opinion">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                  <div className="profile-body--info">
                    <span>Date</span>
                    <span>
                      <FontAwesomeIcon
                        icon="fa-solid fa-thumbs-up"
                        className="icon-grey"
                      />
                      0 Upvotes
                    </span>
                  </div>
                </div>
                <div className="profile-body--opinion">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                  <div className="profile-body--info">
                    <span>Date</span>
                    <span>
                      <FontAwesomeIcon
                        icon="fa-solid fa-thumbs-up"
                        className="icon-grey"
                      />
                      0 Upvotes
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="profile-body--section">
            <h3>Insights</h3>
            <div className="row">
              <div className="col-lg-6 col-12">
                <div className="profile-body--insight">
                    <img src={acropolisAtAthens}/>
                    <div className="px-3">
                    <h5>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                  </h5>
                  <div className="profile-body--info">
                    <span>
                      Date
                    </span>
                    <span>
                      <FontAwesomeIcon
                        icon="fa-solid fa-thumbs-up"
                        className="icon-grey"
                      />
                      0 Upvotes
                    </span>
                  </div>
                    </div>
                  
                </div>
                <div className="profile-body--insight">
                <img src={acropolisAtAthens}/>
                <div className="px-3">
                    <h5>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                  </h5>
                  <div className="profile-body--info">
                    <span>
                      Date
                    </span>
                    <span>
                      <FontAwesomeIcon
                        icon="fa-solid fa-thumbs-up"
                        className="icon-grey"
                      />
                      0 Upvotes
                    </span>
                  </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-12">
                <div className="profile-body--insight">
                <img src={acropolisAtAthens}/>
                <div className="px-3">
                    <h5>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                  </h5>
                  <div className="profile-body--info">
                    <span>
                      Date
                    </span>
                    <span>
                      <FontAwesomeIcon
                        icon="fa-solid fa-thumbs-up"
                        className="icon-grey"
                      />
                      0 Upvotes
                    </span>
                  </div>
                  </div>
                </div>
                <div className="profile-body--insight">
                <img src={acropolisAtAthens}/>
                <div className="px-3">
                    <h5>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                  </h5>
                  <div className="profile-body--info">
                    <span>
                      Date
                    </span>
                    <span>
                      <FontAwesomeIcon
                        icon="fa-solid fa-thumbs-up"
                        className="icon-grey"
                      />
                      0 Upvotes
                    </span>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="profile-body--section">
            <h3>Groups</h3>
            <div className="row">
              <div className="col-xl-4 col-sm-6 col-12">
                <div className="profile-body--group">
                    <img src={acropolisAtAthens}/>
                    <div className="px-3">
                    <h5>
                    Lorem ipsum ipsum lorem
                    
                  </h5>
                  <div className="profile-body--info">
                    <span>
                    <FontAwesomeIcon icon="fa-solid fa-user-group" className="icon-grey" size="xs"/>
                      0 Members
                    </span>
                  </div>
                    </div>
                    
                    
                </div>
              </div>

              <div className="col-xl-4 col-sm-6 col-12">
                <div className="profile-body--group">
                    <img src={acropolisAtAthens}/>
                    <div className="px-3">
                    <h5>
                    Lorem ipsum ipsum lorem
                    
                  </h5>
                  <div className="profile-body--info">
                    <span>
                    <FontAwesomeIcon icon="fa-solid fa-user-group" className="icon-grey" size="xs"/>
                      0 Members
                    </span>
                  </div>
                    </div>
                    
                    
                </div>
              </div>

              <div className="col-xl-4 col-sm-6 col-12">
                <div className="profile-body--group">
                    <img src={acropolisAtAthens}/>
                    <div className="px-3">
                    <h5>
                    Lorem ipsum ipsum lorem
                    
                  </h5>
                  <div className="profile-body--info">
                    <span>
                    <FontAwesomeIcon icon="fa-solid fa-user-group" className="icon-grey" size="xs"/>
                      0 Members
                    </span>
                  </div>
                    </div>
                    
                    
                </div>
              </div>

              <div className="col-xl-4 col-sm-6 col-12">
                <div className="profile-body--group">
                    <img src={acropolisAtAthens}/>
                    <div className="px-3">
                    <h5>
                    Lorem ipsum ipsum lorem
                    
                  </h5>
                  <div className="profile-body--info">
                    <span>
                    <FontAwesomeIcon icon="fa-solid fa-user-group" className="icon-grey" size="xs"/>
                      0 Members
                    </span>
                  </div>
                    </div>
                    
                    
                </div>
              </div>

              <div className="col-xl-4 col-sm-6 col-12">
                <div className="profile-body--group">
                    <img src={acropolisAtAthens}/>
                    <div className="px-3">
                    <h5>
                    Lorem ipsum ipsum lorem
                    
                  </h5>
                  <div className="profile-body--info">
                    <span>
                    <FontAwesomeIcon icon="fa-solid fa-user-group" className="icon-grey" size="xs"/>
                      0 Members
                    </span>
                  </div>
                    </div>
                    
                    
                </div>
              </div>

              <div className="col-xl-4 col-sm-6 col-12">
                <div className="profile-body--group">
                    <img src={acropolisAtAthens}/>
                    <div className="px-3">
                    <h5>
                    Lorem ipsum ipsum lorem
                    
                  </h5>
                  <div className="profile-body--info">
                    <span>
                    <FontAwesomeIcon icon="fa-solid fa-user-group" className="icon-grey" size="xs"/>
                      0 Members
                    </span>
                  </div>
                    </div>
                    
                    
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
