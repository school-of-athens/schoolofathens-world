import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUp } from "@fortawesome/free-regular-svg-icons";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../services/firebase";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, Heading } from "@chakra-ui/react";
import useUserInfo from "../../../hooks/useUserInfo";

export default function ({ title, text, upvotes, id, userId, publishDate }) {
  // TODO: each opinion card should be a separate column div for better responsiveness

  // get the user info to display at the top of each opinion

  const navigate = useNavigate();

  // get the name and photo of the user
  const userInfo = useUserInfo(userId);

  return (
    <div className="opinion-card">
      {/* a div that links to the user's profile page */}
      <div
        className="opinion-card--user"
        onClick={() => navigate(`/user/${userId}`)}
      >
        {/* <img src={userInfo.photoURL} /> */}
        <Avatar size="xs" mr={5} name={userInfo.displayName} src={userInfo.photoURL} />
        {userInfo.displayName}
      </div>
      {/* content of the opinion */}
      <div className="opinion-card--text">
        {title && (
          <Heading size="md" mb={2}>
            {title}
          </Heading>
        )}
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
          <FontAwesomeIcon icon={faCircleUp} className="icon-gray" />
          {upvotes} upvotes
        </span>
      </div>
    </div>
  );
}
