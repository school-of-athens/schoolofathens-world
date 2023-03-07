
import { useEffect, useReducer, useState } from "react";

import "./SignUp.css";
import SignUp from "./SignUp";
import EmailVerification from "./EmailVerification";
import SetUp from "./SetUp";



export default function () {

    const [mode, setMode] = useState("NEW_SIGN_UP");

    switch (mode) {
        case "NEW_SIGN_UP":
            return <SignUp setMode={setMode} />;
        case "EMAIL_VERIFICATION":
            return <EmailVerification setMode={setMode} />;
        case "SET_UP":
            return <SetUp setMode={setMode} />;
        default:
            return <SignUp setMode={setMode} />;
    }
};