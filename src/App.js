// Libraries
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Stylesheets
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";

// Pages
import SharedLayout from "./SharedLayout";
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
import Profile from "./pages/Profile";
import PageNotFound from "./pages/PageNotFound";

import NewVote from "./pages/NewVote";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<SharedLayout />}>
          <Route path="forum" element={<Forum />} />
          <Route path="learn" element={<Learn />} />
          <Route path="groups" element={<Groups />} />
          <Route path="about" element={<About />} />
          <Route path="devlopment" element={<Development />} />
          <Route path="login" element={<SignIn />} />
          <Route path="join" element={<SignUp />} />
          <Route path="compose" element={<NewVote />} />
          <Route path="article" element={<Article />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
