import { Outlet } from "react-router-dom";
import Messages from "./Messages";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { AuthContext, StyleContext } from "../config";

export default function SharedLayout({
  auth,
  toasts,
  sendToast,
  userData,
  setUserData,
  modals,
  setModals
}) {
  return (
    <AuthContext.Provider value={{ auth, userData, setUserData }}>
      <StyleContext.Provider value={{ sendToast, setModals, modals }}>
        <Navbar sendToast={sendToast} />
        <Outlet />
        <Messages messages={toasts} />
        <Footer />
      </StyleContext.Provider>
    </AuthContext.Provider>
  );
}
