
import React, { useState } from "react";
import "./SignUp.css";
import SignUp from "./SignUp";
import EmailVerification from "../../features/Auth/EmailVerification";
import SetUp from "../../features/Auth/SetUpProfile";



export default function () {

    const [page, setPage] = useState(1);
    const [newUser, setNewUser] = useState({
    userId: "",
    email: "",
    displayName: "",
    photoURL: "",
    firstName: "",
    lastName: "",
    profile: ""
  });

    return (
        <>
            {page === 1 && <SignUp setPage={setPage} newUser={newUser} setNewUser={setNewUser} />}
            {page === 2 && <EmailVerification setPage={setPage} />}
            {page === 3 && <SetUp newUser={newUser} setNewUser={setNewUser} />}
        </>
    );
};