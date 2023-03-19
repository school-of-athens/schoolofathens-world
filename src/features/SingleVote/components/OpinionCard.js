import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../services/firebase";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ({ title, text, upvotes, id, userId, publishDate }) {
  


  // TODO: each opinion card should be a separate column div for better responsiveness
  
  // get the user info to display at the top of each opinion
  const [userInfo, setUserInfo] = useState({
    displayName: "",
    photoURL: "",
    id: "",
  });
  const navigate = useNavigate();

  // get the name and photo of the user
  const getUserInfo = async () => {
    try {
      const unfilteredUserInfo = await getDoc(doc(db, "userInfo", userId));
      setUserInfo({ ...unfilteredUserInfo.data(), id: unfilteredUserInfo.id });
    } catch (error) {
      console.log(error.message);
    }
  };

  // get user info at first render
  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <div className="opinion-card">
      {/* a div that links to the user's profile page */}
      <div
        className="opinion-card--user"
        onClick={() => navigate(`/user/${userId}`)}
      >
        <img src={userInfo.photoURL} />
        {userInfo.displayName}
      </div>
      {/* content of the opinion */}
      <div className="opinion-card--text">
        {title && <h5>{title}</h5>}

        <p>{text}</p>
      </div>
      {/* publish date and the number of upvotes */}
      {/* TODO: add a function to handle upvote */}
      <div className="opinion-card--info">
        <span>
          Published {publishDate.toDate().toLocaleTimeString()},{" "}
          {publishDate.toDate().toLocaleDateString()}
        </span>
        <span
          className="opinion-card--upvote"
          onClick={(e) => e.target.children[0].classList.toggle("blue")}
        >
          <FontAwesomeIcon icon="fa-solid fa-circle-up" className="icon-grey" />
          {upvotes} upvotes
        </span>
      </div>
    </div>
  );
}
