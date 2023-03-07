import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";

export default function ({ setMode }) {
  const setUpProfile = () => {
    setMode("SET_UP");
  };

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
        class="btn verify--verified-btn"
        onClick={setUpProfile}
      >
        I verified my email
      </button>
      <button type="button" class="btn verify--resend-btn">
        Resend verification email
      </button>
    </div>
  );
}
