import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import { sendEmailVerification } from "firebase/auth";
import { AuthContext, StyleContext } from "../../config";
import { useContext } from "react";

export default function ({ setPage, newUser, setNewUser }) {


  const { sendToast } = useContext(StyleContext);
  const { auth } = useContext(AuthContext);

  const setUpProfile = async () => {

    await auth.currentUser.reload();

    if (auth.currentUser.emailVerified) {
      sendToast("success", "Your email has been verified!");
      setPage(prev => prev + 1);
    }
    else {
      sendToast("error", "Your email has not been verified. Try resendind the verification email.");
    }
    
  };

  const resendEmail = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      sendToast("success", `Email verification sent to ${newUser.email}. Please check your inbox.`);
    });
  }

  return (
    <div className="container verify">
      <div className="icon_wrapper">
        <FontAwesomeIcon icon={faEnvelopeOpenText} />
      </div>

      <h3>Please verify your email</h3>
      <p>
        Check your inbox! We sent an email verification link to name@example.com
      </p>

      <button
        type="button"
        className="btn verify--verified-btn"
        onClick={setUpProfile}
      >
        I verified my email
      </button>
      <button type="button" className="btn verify--resend-btn" onClick={resendEmail}>
        Resend verification email
      </button>
    </div>
  );
}
