import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { Avatar, Badge, Box, Button, Heading, Text } from "@chakra-ui/react";

export default function ProfileHead({ userData }) {

  return (
    <Box className="profile-head">
      <Box className="container">
        <Box className="profile-head--wrapper flex-column flex-md-row">
          <Avatar
            // src={auth.currentUser.photoURL}
            src={userData?.photoURL}
            boxSize="10rem"
            mr="3rem"
            referrerPolicy="no-referrer"
          />
          <Box className="profile-head--body flex-md-row flex-column mt-4 align-items-start align-items-md-center">
            <Box className="mb-2">
              <Box display="flex" alignItems="center" mb={2}>
                <Heading>{userData?.displayName}</Heading>
                {userData?.groups?.includes("developer") && (
                  <Badge colorScheme="blue" ml={3} fontSize="lg">
                    Developer
                  </Badge>
                )}
              </Box>

              <Text mb={2}>
                Joined in {userData?.joinDate?.toDate().toLocaleString("default", { month: "short" })},{" "}
                {userData?.joinDate?.toDate().getFullYear()}
              </Text>
              <Text>{userData?.followers?.length} Followers | {userData?.following?.length} Following</Text>
            </Box>
            {/* <Button variant="blue">
              <FontAwesomeIcon icon={faPenToSquare} className="me-2" />
              Edit Profile
            </Button> */}
          </Box>
        </Box>

        {/* <Box
          className="col-12 profile-link"
          //  onClick={switchPage}
        >
          <Link
            className={currentPage === "Overview" ? "profile-link--active" : ""}
          >
            Overview
          </Link>
          <Link
            className={currentPage === "Votes" ? "profile-link--active" : ""}
          >
            Votes
          </Link>
          <Link
            className={currentPage === "Opinions" ? "profile-link--active" : ""}
          >
            Opinions
          </Link>
          <Link
            className={currentPage === "Insights" ? "profile-link--active" : ""}
          >
            Insights
          </Link>
          <Link
            className={currentPage === "Groups" ? "profile-link--active" : ""}
          >
            Groups
          </Link>
          <Link
            className={currentPage === "Badges" ? "profile-link--active" : ""}
          >
            Badges
          </Link>
        </Box> */}
      </Box>
    </Box>
  );
}
