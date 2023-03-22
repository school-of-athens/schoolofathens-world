import "../assets/SingleArticle.css";
import { acropolisAtAthens } from "../data/projectFiles";
import { Image } from "@chakra-ui/react";

const SingleArticle = () => {
  return (
    <div class="container">
      <div id="title-img">
        <img src="" alt="" />
      </div>

      <div class="text-center">
        <h1 id="title">Here's Your Title</h1>
      </div>

      <div id="content">
        <h2 class="subtitle">Subtitle</h2>

        <p class="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <div className="text-center" style={{width: "100%"}}>
        <Image  src={acropolisAtAthens} />
        </div>
        

        <div class="quote">
          <i class="fa-solid fa-quote-left fa-2xl"></i>
          <p class="quote-text">To be, or not to be, that is the question.</p>
          <div class="quote-author-source">
            <p>
              <span class="quote-author">William Shakespeare</span>,
              <span class="quote-source">Hamlet</span>.
            </p>
          </div>
        </div>
        <p id="end-mark">-END-</p>
      </div>
    </div>
  );
};

export default SingleArticle;
