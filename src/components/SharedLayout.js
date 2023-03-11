import { Outlet } from "react-router-dom";
import Messages from "./Messages";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { AuthContext, MessageContext } from "../config";

export default function SharedLayout({
  auth,
  messages,
  sendMessage,
  userData,
  setUserData
}) {
  return (
    <AuthContext.Provider value={{ auth, userData, setUserData }}>
      <MessageContext.Provider value={{ sendMessage }}>
        <Navbar sendMessage={sendMessage} />
        <Outlet />
        <Messages messages={messages} />
        <Footer />
      </MessageContext.Provider>
    </AuthContext.Provider>
  );
}
