// Libraries
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

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
              <Home />
          }
        />
        <Route path="/" element={<Layout />}>
          <Route path="forum">
            <Route index element={<Forum />} />
            <Route path="new" element={<Propose />} />
            <Route path=":voteId" element={<SingleVote />} />
          </Route>
          {/* <Route path="learn" element={<Learn />} />
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
          <Route path="*" element={<PageNotFound />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
