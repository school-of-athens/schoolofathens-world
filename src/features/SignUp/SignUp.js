import { google } from "../../data/projectFiles";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ToastContext } from "../../context/ToastContext";
import useFirestore from "../../hooks/useFirestore";

import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { doc, Timestamp, setDoc, getDoc } from "firebase/firestore";

export default function SignUp({ setPage, newUser, setNewUser }) {
  const db = useFirestore();
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { sendToast } = useContext(ToastContext);
  const { auth, setUserData} = useContext(AuthContext);

  const verifyEmail = async () => {
    if (newUser.email && password) {
      try {
        await createUserWithEmailAndPassword(auth, newUser.email, password);

        setNewUser((prev) => {
          return { ...prev, userId: auth.currentUser.uid };
        });

        sendEmailVerification(auth.currentUser).then(() => {
          sendToast(
            "success",
            `Email verification sent to ${newUser.email}. Please check your inbox.`
          );
        });

        setPage((prev) => prev + 1);
      } catch (error) {
        if (error.message === "Firebase: Error (auth/email-already-in-use).") {
          sendToast(
            "error",
            "There is already an account associated with this email. Please sign"
          );
        } else {
          sendToast("error", `An error has occured: ${error.message}`);
        }
      }
    } else if (!newUser.email) {
      sendToast("error", "Email cannot be empty.");
    } else if (!newUser.password) {
      sendToast("error", "Password cannot be empty.");
    }
  };

  const signUpWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();

    signInWithPopup(auth, googleProvider).then(async (result) => {
      const userSnapshot = await getDoc(
        doc(db, "userInfo", auth.currentUser.uid)
      );
      if (!userSnapshot.exists()) {
        const name = result.user.displayName;
        const email = result.user.email;
        const fileURL = result.user.photoURL;

        setUserData((prev) => {
          return {...prev, joinDate: Timestamp.now()};
        })

        try {
          await updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: fileURL,
          });

          const newUserInfo = {
            displayName: name,
            photoURL: fileURL,
          };

          const newUserDetails = {
            firstName: "",
            lastName: "",
            email: email,
            profile: "",
            joinDate: Timestamp.now(),
            points: 0,
            articles: [],
            opinions: [],
            votes: [],
            groups: [],
          };

          await setDoc(doc(db, "userInfo", auth.currentUser.uid), newUserInfo);
          await setDoc(
            doc(db, "userDetails", auth.currentUser.uid),
            newUserDetails
          );
          sendToast("success", "Sign up successful.");

          navigate(`/user/${auth.currentUser.uid}`);
        } catch (error) {
          sendToast("error", `An error has occured: ${error.message}`);
        }
      }
      else {
        sendToast("success", "Sign up successful.");
        navigate(`/user/${auth.currentUser.uid}`);
      }

      
    });
  };

  return (
    <>
      <div className="row signUp">
        <div className="col-lg-7 col-md-5 hidden">
          <div className="img-caption">
            Peter von Hess. <i>The Entry of King Othon of Greece in Athens.</i>
          </div>
        </div>
        <div className="col-lg-5 col-md-7 col-12 signUp--form px-5">
          <h1>Sign Up</h1>
          <button
            type="button"
            className="btn btn-gray signUp--google"
            onClick={signUpWithGoogle}
          >
            <img src={google} height="18" width="18" />
            Sign up with Google
          </button>

          <div className="signUp--divide">
            <hr />
            Or sign up with email
            <hr />
          </div>

          <label for="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="name@example.com"
            onChange={(e) =>
              setNewUser((prev) => {
                return { ...prev, email: e.target.value };
              })
            }
          />
          <label for="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="your password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            className="btn btn-blue signUp--btn"
            onClick={verifyEmail}
          >
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
}
