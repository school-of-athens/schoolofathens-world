
import "./Home.css";

import Welcome from "./Welcome";
import Navbar from "../../components/Navbar";
import Hero from "./Hero";
import HomeFooter from "./HomeFooter";



const Home = ({ sendToast }) => {

    return (
        <div className="scroll-snap">
            <Welcome />
            <Navbar sendToast={sendToast} />
            <Hero />
            <HomeFooter />
        </div>
    );
}

export default Home;