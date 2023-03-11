// Libraries
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Stylesheets
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
// '@fortawesome/free-brands-svg-icons' "@fortawesome/free-solid-svg-icons"
import {
  faRightFromBracket,
  faUser,
  faThumbsUp,
  faCheckToSlot,
  faCommentDots,
  faFeather,
  faUserGroup,
  faCircleUp,
  faCircleExclamation,
  faPlay,
  faArrowLeft,
  faArrowRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";
import {
  faPenToSquare,
} from "@fortawesome/free-regular-svg-icons";

// Pages
import SharedLayout from "./components/SharedLayout";
import Home from "./pages/Home";
import Learn from "./pages/Learn";
import Forum from "./pages/Forum";
import Groups from "./pages/Groups";
import About from "./pages/About";
import Development from "./pages/Development";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Article from "./pages/Article";
import UserProfile from "./pages/UserProfile";
import PageNotFound from "./pages/PageNotFound";
import Vote from "./pages/Vote";
import Propose from "./pages/Propose";
import Test from "./pages/Test";

import { app, db } from "./config";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDoc, doc } from "firebase/firestore";

export default function App() {
  const auth = getAuth(app);
  const [userData, setUserData] = useState(null);
  const [toasts, setToasts] = useState([]);
  const [modals, setModals] = useState([]);

  useEffect(() => {
    document.title = "The School of Athens | Home to Modern Democracy";
    library.add(
      faRightFromBracket,
      faUser,
      faPenToSquare,
      faThumbsUp,
      faCheckToSlot,
      faCommentDots,
      faFeather,
      faUserGroup,
      faCircleUp,
      faCircleExclamation,
      faPlay,
      faPause,
      faArrowLeft,
      faArrowRight
    );
    onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser && currentUser.emailVerified) {
        const userSnapshot = await getDoc(
          doc(db, "userDetails", String(currentUser.uid))
        );
        const userDetails = userSnapshot.data();
        setUserData(userDetails);
      }
    });
  }, []);

  const sendToast = (type, message) => {
    setToasts((prev) => [...prev, { type, message }]);

    setTimeout(() => {
      setToasts((prev) => prev.slice(1));
    }, 4500);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home sendToast={sendToast} />} />
        <Route
          path="/"
          element={
            <SharedLayout
              auth={auth}
              toasts={toasts}
              sendToast={sendToast}
              userData={userData}
              setUserData={setUserData}
              modals={modals}
              setModals={setModals}
            />
          }
        >
          <Route path="forum" element={<Forum />} />
          <Route path="learn" element={<Learn />} />
          <Route path="groups" element={<Groups />} />
          <Route path="about" element={<About />} />
          <Route path="development" element={<Development />} />
          <Route path="login" element={<SignIn />} />
          <Route path="join" element={<SignUp />} />
          <Route path="forum/propose" element={<Propose />} />
          <Route path="vote/:voteId" element={<Vote />} />
          <Route path="article" element={<Article />} />
          <Route path="user/:userId" element={<UserProfile />} />
          <Route path="test" element={<Test />} />
          <Route path="auth/action/*" element={<SignIn />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
