import { createContext, useState, useEffect } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../services/firebase";
import getUserData from "../services/getUserData";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log("Signed out");
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  const authRedirect = () => {
    if (!auth.currentUser) {
      navigate("/login");
    } else if (auth.currentUser && !auth.currentUser.emailVerified) {
      navigate("/auth/email-verify");
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      if (currentUser && !currentUser.emailVerified) {
        navigate("/auth/verify");
      } else {
        const userDataTemp = getUserData(currentUser.uid);

        if (!userDataTemp) {
          navigate("user/edit");
        } else {
          setUserData(userDataTemp);
        }
      }
    });
  }, []);

  const value = {
    auth,
    user,
    handleSignOut,
    authRedirect,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
