// Libraries
import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

// Stylesheets
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./assets/global.css";

// Pages
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Forum from "./pages/Forum";
import Propose from "./pages/Propose";
import SingleVote from "./pages/SingleVote";
import Learn from "./pages/Learn";
import SingleArticle from "./pages/SingleArticle";
import About from "./pages/About";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Groups from "./pages/Groups";
import Community from "./pages/Community";
import Compose from "./pages/Compose";
import Verify from "./pages/Verify";
import UserProfile from "./pages/UserProfile";
import Jinzhou from "./pages/Jinzhou";
import Mario from "./pages/Mario";
import Bulletin from "./components/Bulletin";
import SetUp from "./pages/SetUp";
import PageNotFound from "./pages/PageNotFound";
import Tomomi from "./pages/Tomomi";
export default function App() {
  useEffect(() => {
    document.title = "The School of Athens | Home to Modern Democracy";
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <AuthProvider>
              <Home />
            </AuthProvider>
          }
        />
        <Route path="/" element={<Layout />}>
          <Route path="forum">
            <Route index element={<Forum />} />
            <Route path="new" element={<Propose />} />
            <Route path=":voteId" element={<SingleVote />} />
          </Route>
          <Route path="learn">
            <Route index element={<Learn />} />
            <Route path=":articleId" element={<SingleArticle />} />
            <Route path="compose" element={<Compose />} />
          </Route>
          <Route path="groups">
            <Route index element={<Groups />} />
          </Route>
          <Route path="about">
            <Route index element={<About />} />
            <Route path="jinzhou" element={<Jinzhou />} />
            <Route path="tomomi" element={<Tomomi />} />
            <Route
              path="mario-evangjeli"
              element={<Mario />}
            />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="user">
            <Route path="verify" element={<Verify />} />
            <Route path="setup" element={<SetUp />} />
            <Route path=":userId" element={<UserProfile />} />
          </Route>
          <Route path="test"></Route>
          <Route path="community" element={<Community />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
