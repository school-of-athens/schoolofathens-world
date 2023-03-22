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

export default function ArticleCard({ article }) {
  const navigate = useNavigate();

  return (
    <div className="col" onClick={() => navigate(`/learn/${article.id}`)}>
      <Card maxW="sm" overflow="hidden" variant="outline" bg="white">
        <Image objectFit="cover" src={acropolisAtAthens} />
        <Stack>
          <CardBody mb={0} pb={0} pt={4}>
            <Heading size="md" lineHeight="1.4" noOfLines={3}>
              {article.title}
            </Heading>
            <Button variant="ghostGray" mt={2} p={1} height="fit-content">
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
          <Divider variant="gray" />
          <CardFooter w="100%" justifyContent="space-between" pt={1} pb={2}>
            <Text fontSize="sm">3/20/2023 4:00</Text>
            <Button variant="ghostGray" height="fit-content">
              Share
            </Button>
          </CardFooter>
        </Stack>
      </Card>
    </div>
  );
}
