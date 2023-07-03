import { useEffect, useState } from "react";
import getUserInfo from "@/services/getUserInfo";

const useUserInfo = (userId) => {
  const [userInfo, setUserInfo] = useState({
    displayName: "",
    photoURL: "",
    id: "",
  });

  const getUserInfoAsync = async () => {
    const userInfoSnapshot = await getUserInfo(userId);
    setUserInfo(userInfoSnapshot);
  };

  useEffect(() => {
    getUserInfoAsync();
  }, [userId]);

  return userInfo;
};

export default useUserInfo;
