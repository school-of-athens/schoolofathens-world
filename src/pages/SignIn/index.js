import "./SignIn.css";
import { google } from "../../project-files";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import {
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    updateProfile,
    deleteUser
  } from "firebase/auth";
import {app, db} from "../../config";
import { MessageContext, AuthContext } from "../../config";
import { doc, Timestamp, setDoc, getDoc } from "firebase/firestore";

export default function() {

    const navigate = useNavigate();
    const { sendMessage } = useContext(MessageContext);
    const { auth, setUserData} = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signInWithGoogle = () => {
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
            sendMessage("success", "Sign up successful.");
  
            navigate(`/dashboard/${auth.currentUser.uid}`);
          } catch (error) {
            sendMessage("error", `An error has occured: ${error.message}`);
          }
        }
        else {
          sendMessage("success", "Sign up successful.");
          navigate(`/dashboard/${auth.currentUser.uid}`);
        }
  
        
      });
    };

      const signIn = async () => {
        if (email && password) {
            signInWithEmailAndPassword(auth, email, password)
            .then(() => {
              if (!auth.currentUser.emailVerified) {
                sendMessage("error", "Your email has not been verified. Please sign up again.");
                deleteUser(auth.currentUser);
              }
              else {
                sendMessage("success", "Sign in successful!");
                navigate(`/dashboard/${auth.currentUser.uid}`);
              }
                
            })
            .catch((error) => {
              switch (error.message) {
                case "Firebase: Error (auth/user-not-found).":
                  sendMessage("error", "User not found. Please sign up.");
                  break;
                case "Firebase: Password should be at least 6 characters (auth/weak-password).":
                  sendMessage("error", "Password should be at least 6 characters.");
                  break;
                case "Firebase: Error (auth/wrong-password).":
                  sendMessage("error", "Wrong password. Please try again.");
                  break;
                default:
                  sendMessage("error", `An error has occured: ${error.message}`)
              }
            });
        }
        
      }
    
    return (
            <div className="row signIn">
                <div className="img-caption">
                    Edward Dodwell. <i>Bazar of Athens.</i>
                </div>
            
                <div className="signIn--form col-11 col-lg-4 col-md-6 px-lg-5 px-2">
                    <h1>Sign Up</h1>
                    <button type="button" className="btn btn-grey signIn--google-btn" onClick={signInWithGoogle}>
                        <img src={google} height="18" width="18"/>
                        Sign in with Google
                    </button>

                    <div className="signIn--divide">
                        <hr />
                        Or sign in with email
                        <hr />
                    </div>

                    <label for="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} />
                    <label for="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="your password" onChange={(e) => setPassword(e.target.value)} />
                    <button type="button" className="btn btn-blue" onClick={() => signIn()}>Sign In</button>
                    <button type="button" className="btn signIn--forget_password">Don't remember your password?</button>
                </div>
            </div>
    );
};