import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Notice from "../components/Notice";

export default function() {
    return (
        <>
            <Navbar />
            <Notice text="This page is still under development."/>
            <Footer />
        </>
    );
};