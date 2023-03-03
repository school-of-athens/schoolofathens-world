import Welcome from "../components/Welcome";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import "../assets/styles/home.css";


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