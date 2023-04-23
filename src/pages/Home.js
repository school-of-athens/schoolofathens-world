
import { Box } from "@chakra-ui/react";
import "../assets/Home.css";

import { Welcome, Navbar, Hero, HomeFooter } from "../features/Home";


const Home = ({ sendToast }) => {

    return (
        <Box className="scroll-snap" bgColor="gray.50">
            <Welcome />
            <Navbar sendToast={sendToast} />
            <Hero />
            <HomeFooter />
        </Box>
    );
}

export default Home;