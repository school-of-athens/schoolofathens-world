
import "../../assets/styles/about.css";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import AboutTitle from "../../components/AboutTitle";
import People from "../../components/People";

export default function() {
    return (
        <>
            <Navbar />
            <AboutTitle />
            <People />
            <Footer />
        </>
    );
};