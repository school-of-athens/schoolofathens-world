import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { AuthProvider } from "../context/AuthContext";
import useScrollToTop from "../hooks/useScrollToTop";

export default function Layout({ auth, userData, setUserData, getUserData }) {
  useScrollToTop();

  return (
    <AuthProvider>
      <Navbar />
      <Outlet />
      <Footer />
    </AuthProvider>
  );
}
