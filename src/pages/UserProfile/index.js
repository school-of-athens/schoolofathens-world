import { useContext } from "react";
import Me from "./Me";
import Other from "./Other";
import { NavLink, useParams } from "react-router-dom";
import { AuthContext } from "../../config";
import "./UserProfile.css";

export default function UserProfile() {
  const { userId } = useParams();
  const { auth, userData } = useContext(AuthContext);

  if (auth?.currentUser?.uid === userId) {
    return <Me />;
  } else {
    return <Other userId={userId} />;
  }
}
