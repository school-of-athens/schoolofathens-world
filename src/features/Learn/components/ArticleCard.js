import {
  Card,
  Stack,
  Image,
  CardBody,
  Heading,
  Button,
  Flex,
  Avatar,
  Box,
  Text,
  CardFooter,
  Divider,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { acropolisAtAthens } from "../../../data/projectFiles";
import { faCircleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ArticleCard({ article, num }) {
  const navigate = useNavigate();

  return (
    <Card maxW="sm" overflow="hidden" variant="borderBottom">
      <Box onClick={() => navigate(`/learn/${article.id}`)}>
        <Image objectFit="cover" src={acropolisAtAthens} width="100%" maxH="13rem" />

        <CardBody mb={0} pb={0} pt={4}>
          <Heading size="md" lineHeight="1.4" noOfLines={num}>
            {article.title}
          </Heading>
          <Button variant="ghostGray" mt={1} p={1} height="fit-content">
            <Flex
              gap="2"
              alignItems="center"
              flexWrap="wrap"
              justifyContent="start"
              p={0}
            >
              <Avatar name="Author WU" size="2xs" src="" colorScheme="blue" />
              <Box>
                <Text fontSize="sm">Author</Text>
              </Box>
            </Flex>
          </Button>
        </CardBody>
      </Box>
      <Divider variant="gray" my="1" />
      <CardFooter w="100%" justifyContent="space-between" pt={1} pb={2}>
        <Text fontSize="sm">3/20/2023 4:00</Text>
        <Button
          variant="ghostGray"
          height="fit-content"
          onClick={(e) => {
            e.preventDefault();
            alert("Haha");
          }}
        >
          <FontAwesomeIcon icon={faCircleUp} className="me-2" color="gray" />0
        </Button>
      </CardFooter>
    </Card>
  );
}
