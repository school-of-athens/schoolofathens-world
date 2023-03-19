import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { AuthProvider } from "../context/AuthContext";

export default function Layout({
  auth,
  userData,
  setUserData,
  getUserData
}) {
  return (
    <AuthProvider>
        <Navbar />
        <Outlet />
        <Footer />
    </AuthProvider>
  );
}
