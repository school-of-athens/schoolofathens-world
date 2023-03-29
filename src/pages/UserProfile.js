import {
  AboutMe,
  Groups,
  Insights,
  Opinions,
  ProfileHead,
  Votes,
  useUserData,
} from "../features/UserProfile";
import "../assets/UserProfile.css";
import { useParams } from "react-router-dom";

export default function Overview() {
  const { userId } = useParams();
  const userData = useUserData(userId);

  console.log(userData);

  return (
    <>
      <ProfileHead userData={userData} />
      <div className="profile-body container">
        <div className="row">
          <AboutMe userData={userData} />
          <div className="col-md-8 col-12">
            <Votes userData={userData} />
            <Opinions userData={userData} />
            <Insights userData={userData} />
            <Groups userData={userData} />
          </div>
        </div>
      </div>
    </>
  );
}
