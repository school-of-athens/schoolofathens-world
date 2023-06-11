import { Avatar, Box, Card, Flex, Heading, Text } from "@chakra-ui/react";
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
    <Flex flexDirection="column" alignItems="center">
      <Card
      py={7}
      px={4}
      w="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      onClick={handleClick}>
        <Avatar referrerPolicy="no-referrer" borderRadius="full" boxSize="10rem" src={photoURL} border="solid" borderWidth="2px" borderColor="red" />
        <Heading size="md" mt="3">
          {name ? name : "Could Be You"}
        </Heading>
        <Text mt="1" textAlign="center">
          {intro ? intro : "Become a developer"}
        </Text>
      </Card>
    </Flex>
  );
};

export default PersonCard;
