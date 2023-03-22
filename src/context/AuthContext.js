import { createContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../services/firebase";
import getUserData from "../services/getUserData";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser && !currentUser.emailVerified) {
        navigate("/auth/verify");
      } else {
        const userDataTemp = getUserData(currentUser?.uid);

        if (!userDataTemp) {
          navigate("user/edit");
        } else {
          setUserData(userDataTemp);
        }
      }
    });
  }, []);

  // TODO: auth required protection component

  const value = {
    auth,
    userData,
    setUserData,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
