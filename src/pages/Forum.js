import "../assets/styles/forum.css";

import ForumTitle from "../components/ForumTitle";
import VoteSample from "../components/VoteSample";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function () {
    return (
        <>
            <Navbar />
            <ForumTitle />
            <VoteSample />
            <Footer />
        </>
    );
};