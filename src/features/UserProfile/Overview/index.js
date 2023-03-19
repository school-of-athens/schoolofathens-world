import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { AuthContext } from "../../../config";
import { acropolisAtAthens } from "../../../assets/projectFiles";
import AboutMe from "./AboutMe";
import Votes from "./Votes";
import Opinions from "./Opinions";
import Insights from "./Insights";
import Groups from "./Groups";

export default function Overview() {
  const { auth, userData } = useContext(AuthContext);

  return (
    <div className="profile-body container">
      <div className="row">
        <AboutMe />
        <div className="col-md-8 col-12">
          <Votes />
          <Opinions />
          <Insights />
          <Groups />
        </div>
      </div>
    </div>
  );
}
