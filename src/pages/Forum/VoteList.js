
import VoteBinary from "./VoteBinary";
import VoteMultiple from "./VoteMultiple";


export default function ({voteList}) {


  return (
        <div className="col-lg-9 col-md-8 col-12">
          {
            voteList.map((vote) => {
              return <VoteBinary vote={vote} /> 
            })
          }
        </div>
  );
}
