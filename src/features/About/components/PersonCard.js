import { Avatar, Button, Card, Heading, Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const PersonCard = ({ url, photoURL, name, intro }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (url) {
      navigate(`/about/${url}`);
    }
    else {
      navigate("/community");
    }
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <Card className="people-card" onClick={handleClick}>
        <Avatar borderRadius="full" boxSize="10rem" src={photoURL} border="solid" borderWidth="2px" borderColor="red" />
        <Heading size="md" mt="3">
          {name ? name : "Could Be You"}
        </Heading>
        <Text mt="1" textAlign="center">
          {intro ? intro : "Become a developer"}
        </Text>
      </Card>
    </div>
  );
};

export default PersonCard;
