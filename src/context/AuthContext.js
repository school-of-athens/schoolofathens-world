
'use client';

import { createContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/services/firebase";
import getUserData from "../services/getUserData";
import { useRouter } from "next/navigation";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        if (!currentUser.emailVerified) {
          router.push("/user/verify");
        } else {
          const userDataTemp = await getUserData(currentUser.uid);

          if (!userDataTemp) {
            router.push("/user/setup");
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
