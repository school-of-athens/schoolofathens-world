import {
  Box,
  Avatar,
  Button,
  Heading,
  FormControl,
  Input,
  FormLabel,
  Textarea,
  FormHelperText,
} from "@chakra-ui/react";
import useImageUpload from "../hooks/useImageUpload";
import useNewUser from "../hooks/useNewUser";
import useUserUpload from "../hooks/useUserUpload";

const SetUpProfile = () => {

  const [newUser, setNewUser] = useNewUser();
  const [imageURL, imageUpload] = useImageUpload();
  const userUpload = useUserUpload();

  return (
    <>
      <Box className="container set_up px-md-5 px-2">
        <Heading>Set Up Your Profile</Heading>
        <Box className="row">
          <Box className="col-12">
            <Avatar boxSize="10rem" my="4" src={imageURL} name={newUser.displayName} />
          </Box>
          <Box className="col-12" mb={3}>
            <FormControl>
              <FormLabel>Pick a profile photo</FormLabel>
              <input
                className="form-control"
                type="file"
                accept="image/*"
                onChange={(e) => {
                  imageUpload(e.target.files[0]);
                }}
              />
              <FormHelperText>If you choose not to upload a profile photo, we will create one based on your name.</FormHelperText>
            </FormControl>
          </Box>
          <Box className="col-md-4 col-12">
            <FormControl>
              <FormLabel>Pick a username</FormLabel>
              <Input type="text" placeholder="Your username" onChange={(e) => {
                setNewUser((prev) => {
                  return {...prev, displayName: e.target.value};
                })
              }} />
            </FormControl>
          </Box>
          <Box className="col-md-4 col-12">
            <FormControl>
              <FormLabel>What's your first name?</FormLabel>
              <Input type="text" placeholder="Your first name" onChange={(e) => {
                setNewUser((prev) => {
                  return {...prev, firstName: e.target.value};
                })
              }} />
            </FormControl>
          </Box>
          <Box className="col-md-4 col-12">
            <FormControl>
              <FormLabel>What's your last name?</FormLabel>
              <Input type="text" placeholder="Your last name" onChange={(e) => {
                setNewUser((prev) => {
                  return {...prev, lastName: e.target.value};
                })
              }} />
            </FormControl>
          </Box>
          <Box className="col-12" mt={3}>
            <FormControl>
              <FormLabel>Public Bio</FormLabel>
              <Textarea type="text" rows="10" onChange={(e) => {
                setNewUser((prev) => {
                  return {...prev, bio: e.target.value};
                })
              }} />
            </FormControl>
          </Box>
          <Box className="col-12 text-center">
            <Button variant="blue" mt="5" onClick={() => userUpload(newUser, imageURL)}>
              Submit
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default SetUpProfile;