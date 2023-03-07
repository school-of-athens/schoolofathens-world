export default function () {
  return (
    <div className="single-vote container">
      <h2 className="text-center vote-title">
        Is Democracy a Means or an End?
      </h2>

      <div className="vote-stats">
        21043 people voted | 3421 people expressed their opinions
      </div>
      <div className="vote-text justify-content-between">
        <h3>A Means</h3>
        <h3>An End</h3>
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
