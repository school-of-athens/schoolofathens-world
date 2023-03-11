
import { useNavigate } from "react-router-dom";

export default function () {

  const navigate = useNavigate();

  return (
    <div className="single-vote container" onClick={() => navigate("/forum/vote")}>
      <h2 className="text-center vote-title">
        Vote Binary Title
      </h2>

      <div className="vote-stats">
        0 votes | 0 opinions
      </div>
      <div className="vote-text justify-content-between">
        <h3>Option 1</h3>
        <h3>Option 2</h3>
      </div>
      <div className="vote-bar">
        <div className="vote-bar-left">
          <p>0% (0/0)</p>
        </div>
        <div className="vote-bar-right">
          <p>0% (0/0)</p>
        </div>
      </div>

      <div className="vote-note">Public | No Due Date</div>
    </div>
  );
}
