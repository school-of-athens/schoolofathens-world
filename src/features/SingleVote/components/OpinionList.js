import OpinionCard from "./OpinionCard";

const OpinionList = ({ voteOptions, opinionList }) => {
  return (
    <div className="vote-body">
      <div className="container">
        {/* OpinionList is a list with two rows */}
        {/* TODO: build a selector for which option to display */}
        <div className="row">
          <div className="col-12 col-md-6 opinion-list pe-4">
            {opinionList[voteOptions[0]] ? (
              opinionList[voteOptions[0]].map((opinion) => {
                return <OpinionCard {...opinion} />;
              })
            ) : (
              <p className="text-center">
                There is currently no opinion supporting this option.
              </p>
            )}
          </div>
          <div className="col-12 col-md-6 opinion-list ps-4">
            {opinionList[voteOptions[1]] ? (
              opinionList[voteOptions[1]].map((opinion) => {
                return <OpinionCard {...opinion} />;
              })
            ) : (
              <p className="text-center">
                There is currently no opinion supporting this option.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpinionList;
