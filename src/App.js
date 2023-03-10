// Libraries
import React, { useEffect, createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Stylesheets
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";

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
import NewArticle from "./pages/NewArticle";
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
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    document.title = "The School of Athens | Home to Modern Democracy";

    onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser && currentUser.emailVerified) {
        const userSnapshot = await getDoc(doc(db, "userDetails", String(currentUser.uid)));
        const userDetails = userSnapshot.data();
        setUserData(userDetails);
        console.log(userDetails);
        console.log(userDetails.joinDate.toDate());
      }
    });
  }, []);

  const sendMessage = (type, message) => {
    setMessages((prev) => [...prev, { type, message }]);

    setTimeout(() => {
      setMessages((prev) => prev.slice(1));
    }, 4500);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/"
          element={
            <SharedLayout
              auth={auth}
              messages={messages}
              sendMessage={sendMessage}
              userData={userData}
              setUserData={setUserData}
            />
          }
        >
          <Route path="forum" element={<Forum />} />
          <Route path="learn" element={<Learn />} />
          <Route path="groups" element={<Groups />} />
          <Route path="about" element={<About />} />
          <Route path="devlopment" element={<Development />} />
          <Route path="login" element={<SignIn />} />
          <Route path="join" element={<SignUp />} />
          <Route path="forum/propose" element={<Propose />} />
          <Route path="forum/vote" element={<Vote />} />
          <Route path="article" element={<Article />} />
          <Route path="dashboard/:userId" element={<UserProfile />} />
          <Route path="test" element={<Test />} />
          <Route path="auth/action/*" element={<SignIn />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
