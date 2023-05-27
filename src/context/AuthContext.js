import { createContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../services/firebase";
import getUserData from "../services/getUserData";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        if (!currentUser.emailVerified) {
          navigate("/user/verify");
        } else {
          const userDataTemp = await getUserData(currentUser.uid);

          if (!userDataTemp) {
            navigate("/user/setup");
          } else {
            setUserData(userDataTemp);
          }
        }
      }
    });
  }, []);

  const value = {
    user,
    userData,
    setUserData,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
