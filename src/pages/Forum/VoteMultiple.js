import { useNavigate } from "react-router-dom";

export default function () {

  const navigate = useNavigate();

  return (
    <div className="single-vote container" id="" onClick={() => navigate("/forum/vote")}>
      <h2 className="text-center vote-title">Vote Multiple Title</h2>
    <div className="vote-stats">
        0 votes | 0 opinions
    </div>

      <div className="option">
        <div className="vote-bar-multiple vote-multiple-1">
            <p>0% (0/0)</p>
        </div>

        <h3>Option 1</h3>
      </div>

      <div className="option">
        <div className="vote-bar-multiple vote-multiple-2">
            <p>0% (0/0)</p>
        </div>

        <h3>Option 2</h3>
      </div>

      <div className="option">
        
        <div className="vote-bar-multiple vote-multiple-3">
            <p>0% (0/0)</p>
        </div>

        <h3>Option 3</h3>
      </div>
      <div className="vote-note">
        Public | No Due Date
      </div>
    </div>
  );
}
