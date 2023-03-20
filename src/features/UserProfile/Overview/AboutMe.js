

export default () => {

    return (
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
                  className="icon-gray"
                />
                0 Upvotes
              </p>
              <p>
                <FontAwesomeIcon
                  icon="fa-solid fa-check-to-slot"
                  className="icon-gray"
                />
                0 Votes
              </p>
              <p>
                <FontAwesomeIcon
                  icon="fa-solid fa-comment-dots"
                  className="icon-gray"
                />
                0 Opinions
              </p>
              <p>
                <FontAwesomeIcon
                  icon="fa-solid fa-feather"
                  className="icon-gray"
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
    );

};