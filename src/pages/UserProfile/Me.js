import { useContext, useState } from "react";
import ProfileHead from "./ProfileHead";
import Overview from "./Overview";
export default function UserProfile() {
  
    const [currentPage, setCurrentPage] = useState("Overview");
  return (
    <>
      <ProfileHead setCurrentPage={setCurrentPage} currentPage={currentPage} />
      <Overview />
    </>
  );
}
