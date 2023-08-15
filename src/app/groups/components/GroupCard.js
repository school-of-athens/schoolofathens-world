import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
  CardFooter,
  GridItem,
  Image,
  AvatarGroup,
  Avatar,
  Link,
  Divider,
  Box,
  Icon,
} from "@chakra-ui/react";
import sampleGroup from "@/data/sampleGroup";
import NextLink from "next/link";
import { acropolisAtAthens } from "@/data/projectFiles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";

function GroupCard() {
  return (
    <GridItem colSpan={3}>
      <Link
        as={NextLink}
        href={`/groups/sample`}
        _hover={{ textDecoration: "none" }}
      >
        <Card variant="borderBottom">
          <Image
            objectFit="cover"
            src={acropolisAtAthens}
            width="100%"
            maxH="13rem"
          />

          <CardBody px={3} py={2}>
            <Heading size="md" lineHeight="1.4" noOfLines={2}>
              Group Name
            </Heading>
            <Text mb={0}>
              Group Description.
            </Text>
          </CardBody>
          <CardFooter
            borderTop="2px solid"
            borderTopColor="gray.300"
            display="flex"
            justifyContent="end"
            alignItems="center"
            color="gray.500"
          >
            <Icon as={FontAwesomeIcon} icon={faUserGroup} me={2} /> 0
          </CardFooter>
        </Card>
      </Link>
    </GridItem>
  );
}

export default GroupCard;
