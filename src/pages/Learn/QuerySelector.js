

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


export default function() {
    return (
        
        <div className="col-lg-3 col-md-4 px-5 col-12 pb-4">
          <div className="query-selector">
            <h5>Search</h5>
            <div className="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search (Disabled)"
                disabled
              />
              <button className="btn btn-blue" type="submit">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>

            <h5>Sort by</h5>
            <select className="form-select" aria-label="select">
              <option selected value="NEWEST">
                Newest
              </option>
              <option value="VOTES">Upvotes</option>
            </select>
            <h5>Topics</h5>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="Current Events"
                id="CurrentEvents"
              />
              <label className="form-check-label" for="CurrentEvents">
                Current Events
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="International"
                id="International"
              />
              <label className="form-check-label" for="International">
                International
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="Domestic"
                id="Domestic"
              />
              <label className="form-check-label" for="Domestic">
                Domestic
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="Politics"
                id="Politics"
              />
              <label className="form-check-label" for="Politics">
                Politics
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="Society"
                id="Society"
              />
              <label className="form-check-label" for="Society">
                Society
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="History"
                id="History"
              />
              <label className="form-check-label" for="History">
                History
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="Science"
                id="Science"
              />
              <label className="form-check-label" for="Science">
                Science
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="Art"
                id="Art"
              />
              <label className="form-check-label" for="Art">
                Art
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="Education"
                id="Education"
              />
              <label className="form-check-label" for="Education">
                Education
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="Health"
                id="Health"
              />
              <label className="form-check-label" for="Health">
                Health
              </label>
            </div>
          </div>
        </div>
    );
};