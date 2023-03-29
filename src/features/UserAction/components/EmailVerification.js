import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import useSendVerificationEmail from "../hooks/useSendVerificationEmail";
import useCheckIfVerified from "../hooks/useCheckIfVerified";

const EmailVerification =  () => {

  const sendVerificationEmail = useSendVerificationEmail();
  const checkIfVerified = useCheckIfVerified();

  return (
    <Box className="container verify">
      <Box className="icon_wrapper">
        <FontAwesomeIcon icon={faEnvelopeOpenText} />
      </Box>

      <Heading>Please verify your email</Heading>
      <Text my={4}>
        Check your inbox! We sent an email verification link to name@example.com
      </Text>

      <Button
        variant="blue"
        onClick={checkIfVerified}
      >
        I verified my email
      </Button>
      <Button
        variant="light"
        mt={3}
        onClick={sendVerificationEmail}
      >
        Resend verification email
      </Button>
    </Box>
  );
}

export default EmailVerification;