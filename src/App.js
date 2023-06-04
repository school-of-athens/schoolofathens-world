// Libraries
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./assets/themes";

// Stylesheets
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./assets/global.css";

// Pages
import Layout from "./layouts/Layout";
import {
  Home,
  Forum,
  Propose,
  SingleVote,
  Learn,
  About,
  Login,
  SignUp,
  Groups,
  Community,
  Compose,
  Verify,
  UserProfile,
  Jinzhou,
  Mario,
  SetUp,
  PageNotFound,
  Tomomi,
  Cole,
} from "./pages";
import TextToxicity from "./__test__/TextToxicity";

export default function App() {

  return (
    <ChakraProvider theme={theme}>
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
              <Route path="compose" element={<Compose />} />
            </Route>
            <Route path="groups">
              <Route index element={<Groups />} />
            </Route>
            <Route path="about">
              <Route index element={<About />} />
              <Route path="jinzhou" element={<Jinzhou />} />
              <Route path="tomomi" element={<Tomomi />} />
              <Route path="mario-evangjeli" element={<Mario />} />
              <Route path="cole" element={<Cole />} />
              <Route path="mc" element={<Bulletin />} />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="user">
              <Route path="verify" element={<Verify />} />
              <Route path="setup" element={<SetUp />} />
              <Route path=":userId" element={<UserProfile />} />
            </Route>
            <Route path="test">
              <Route path="toxicity" element={<TextToxicity />} />
            </Route>
            <Route path="community" element={<Community />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}
