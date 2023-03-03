import Plato from "../assets/images/Plato.jpg";
import Aristotle from "../assets/images/Aristotle.jpg";
import Debate from "../assets/images/Debate.png";
import Blockchain from "../assets/images/Blockchain.png";
import Group from "../assets/images/Group.jfif";
import Insight from "../assets/images/Insight.jpg";
import Athens from "../assets/images/Athens.jpg";
// import Decentralization from "../assets/images/Decentralization.svg";


const Hero = () => {

    return (
        <div className="container justify-content-center content">
      <div className="row sect content-first-child">
        <div className="col-lg-4 col-md-5 col-12 my-auto">
          <img src={Plato} className="hero-image" />
        </div>
        <div className="inside-text col-lg-8 col-md-7 col-12 text-start my-auto">
          <h1 className="text-start">Home to Modern Democracy.</h1>
          <p>Join Home to Modern Democracy, the digital forum that uses Web3 blockchain technology for secure and
            transparent voting. Our decentralized platform fosters democratic decision-making and high-quality
            discussions on pressing issues, inspired by Athenian democracy. Join us to be a part of the
            movement to build a more democratic and inclusive world.</p>
        </div>
      </div>
      <div className="row sect">
        <div className="inside-text inside-text col-lg-8 col-md-7 col-12 my-auto text-end">
          <h1 className="text-end">The World Needs More Perspectives.</h1>
          <p>In today's polarized world, it's more important than ever to engage in reasoned dialogue and see issues
            from multiple perspectives. Our platform provides a safe space for high-quality discussions and democratic
            decision-making, encouraging users to see the other side of complex issues.</p>
        </div>
        <div className="col-lg-4 col-md-5 col-12 my-auto">
          <img src={Aristotle} className="hero-image" />
        </div>
      </div>

      <div className="row sect">
        <div className="col-lg-4 col-md-5 col-12 my-auto">
          <img src={Debate} className="hero-image" />
        </div>
        <div className="inside-text col-lg-8 col-md-7 col-12 my-auto text-start">
          <h1 className="text-start">Debate and Vote on Issues, not People.</h1>
          <p>We encourages reasoned
            dialogue and informed decision-making by presenting well-organized arguments and evidence for both sides of
            an issue. Let's vote on issues, not people, and build a more inclusive and democratic world together.</p>
            <button type="button" className="btn btn-primary" onclick="window.location.href='forum';">Vote Now</button>
        </div>
      </div>
      <div className="row sect">
        <div className="inside-text inside-text col-lg-8 col-md-7 col-12 my-auto text-end">
          <h1 className="text-end">Share Your Insights.</h1>
          <p>share your insights with our inclusive community. Our blog functionality lets you publish articles, create
            podcasts, and share your stories. Your voice matters, and our platform provides a safe and inclusive space
            to express your experiences and perspectives.</p>
            <button type="button" className="btn btn-primary" onclick="window.location.href='learn';">Learn</button>
        </div>
        <div className="col-lg-4 col-md-5 col-12 my-auto">
          <img src={Insight} className="hero-image" />
        </div>
      </div>

      <div className="row sect">
        <div className="col-lg-4 col-md-5 col-12 my-auto">
          <img src={Blockchain} className="hero-image" />
        </div>
        <div className="inside-text col-lg-8 col-md-7 col-12 text-start my-auto">
          <h1 className="text-start">Deployed on Web3 and Blockchain.</h1>
          <p>Your votes are secure and transparent. The blockchain keeps an immutable record of who voted for whom, and
            the results are stored in a decentralized way, making it nearly impossible to compromise the outcome.</p>
            <button type="button" className="btn btn-primary" onclick="window.location.href='404';">Learn How You Vote on Blockchain</button>
        </div>
      </div>
      <div className="row sect">
        <div className="inside-text inside-text col-lg-8 col-md-7 col-12 my-auto text-end">
          <h1 className="text-end">Dencentralized Management.</h1>
          <p>The blockchains for each referendum is distributed around each user and verified with each other routinely,
            providing a safe and secure way to vote. When a vote reaches its deadline, the result is archived, and the
            blockchain is then deleted. Moreover, our website is
            decentralized, with no central authority controlling it.</p>
            <button type="button" className="btn btn-primary" onclick="window.location.href='404';">Learn About Decentralization</button>
        </div>
        <div className="col-lg-4 col-md-5 col-12 my-auto">
          <img src={Athens} className="hero-image" />
        </div>
      </div>

      <div className="row sect">
        <div className="col-lg-4 col-md-5 col-12 my-auto">
          <img src={Group} className="hero-image" />
        </div>
        <div className="inside-text col-lg-8 col-md-7 col-12 text-start my-auto">
          <h1 className="text-start">Find Your Groups.</h1>
          <p>Connect with others who share similar interests, values, and goals. Groups can be created for schools,
            universities, communities, and more, to discuss, debate, and vote on issues that matter.</p>
            <button type="button" className="btn btn-primary" onclick="window.location.href='groups';">See Groups</button>
        </div>
      </div>
      <div className="row sect">
        <div className="inside-text inside-text col-lg-8 col-md-7 col-12 my-auto text-end">
          <h1 className="text-end">Join as an Athen Today.</h1>
          <p>Join the School of Athens, and become a part of modern democracy. Experience high-quality discussions, make
            educated decisions, and be a part of a decentralized and secure platform. Let's bring back diverse
            perspectives and become the Athenians of the 21st century.</p>
            <button type="button" className="btn btn-primary" onclick="window.location.href='join';">Sign-up</button>
        </div>
        <div className="col-lg-4 col-md-5 col-12 my-auto">
          <img src={Athens} className="hero-image" />
        </div>
      </div>

    </div>
    );


};


export default Hero;