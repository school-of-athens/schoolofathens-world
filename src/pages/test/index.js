
import { AuthContext } from "../../config";
import { useContext, useState } from "react";
import { signOut } from "firebase/auth";

export default function () {

  const { auth } = useContext(AuthContext);

  const handleClick = () => {
    signOut(auth);
  };

  return (
    <>
    <div style={{height: "80vh"}} className="d-flex justify-content-center align-items-center">
    <button
        className="btn btn-blue"
        onClick={() =>
          handleClick()
        }
      >Click</button>
    </div>
      
    </>
  );
}
