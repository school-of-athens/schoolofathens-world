
import "../assets/Home.css";

import { Welcome, Navbar, Hero, HomeFooter } from "../features/Home";


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