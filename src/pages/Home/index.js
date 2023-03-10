
import "./Home.css";

import Welcome from "./Welcome";
import Navbar from "../../components/Navbar";
import Hero from "./Hero";
import Footer from "../../components/Footer";



const Home = () => {

    return (
        <div className="scroll-snap">
            <Welcome />
            <Navbar />
            <Hero />
            <Footer />
        </div>
    );
}

export default Home;