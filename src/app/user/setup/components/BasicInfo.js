import {
  Box,
  Heading,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Avatar,
} from "@chakra-ui/react";

export default function BasicInfo({ setActiveStep }) {
  return (
    <>
      <Heading mb={10}>Fill out your information</Heading>
      <FormControl>
        <FormLabel htmlFor="profile-pic" display="flex" flexDirection="column">
          Profile picture
          <Avatar mt={3} size="2xl" />
        </FormLabel>
        <Input display="none" id="profile-pic" type="file" accept="image/*" />

        <FormLabel mt={4}>Username</FormLabel>
        <Input variant="primary" type="text" placeholder="Your username" />
      </FormControl>

      <Box textAlign="center" mt={12}>
        <Button variant="blue" onClick={() => setActiveStep(2)}>
          Next
        </Button>
      </Box>
    </>
  );
}
