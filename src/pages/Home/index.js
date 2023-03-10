
import "./Home.css";

import Welcome from "./Welcome";
import Navbar from "../../components/Navbar";
import Hero from "./Hero";
import HomeFooter from "./HomeFooter";



const Home = () => {

    return (
        <div className="scroll-snap">
            <Welcome />
            <Navbar />
            <Hero />
            <HomeFooter />
        </div>
    );
}

export default Home;