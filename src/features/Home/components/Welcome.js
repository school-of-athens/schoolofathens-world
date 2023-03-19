import { Button, Heading, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {

    const navigate = useNavigate();

  return (
    <div className="frontface sect">
      <div className="frontImg"></div>
      <div className="frontTitle px-3">
        <Heading color="white" fontSize="2.5rem" mb={3}>Welcome to the School Of Athens!</Heading>
        <Text maxW="1000px" color="white" fontSize="xl">The School of Athens is a fresco by the Italian Renaissance artist
          Raphael. It depicts a congregation of philosophers, mathematicians,
          and scientists from Ancient Greece, including Plato, Aristotle,
          Pythagoras, Archimedes, and Heraclitus.</Text>
        <Button bg="white" mt={3} className="btn-grey" onClick={() => navigate("/404")}>Learn More</Button>
      </div>
    </div>
  );
};

export default Welcome;
