import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  CardFooter,
  Button,
  Box,
  Flex,
  Avatar,
  IconButton,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  ButtonGroup,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { acropolisAtAthens } from "../../../data/projectFiles";
import { ArrowRightIcon, ArrowLeftIcon } from "@chakra-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef, useEffect } from "react";

const Audio = () => {
  // state
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // references
  const audioPlayer = useRef();   // reference our audio component
  const progressBar = useRef();   // reference our progress bar
  const animationRef = useRef();  // reference the animation

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  }

  console.log(progressBar?.current);
  console.log(duration);

  return (
    <>
      <Flex justifyContent="center" my={5}>
        <Card
          direction={{ base: "column", md: "row" }}
          overflow="hidden"
          variant="plain"
          maxW="90vw"
          p={5}
        >
          <Box>
            <Image
              objectFit="cover"
              borderRadius="0.5rem"
              w={{ base: "100%", md: "15rem" }}
              h={{ base: "20rem", md: "15rem" }}
              src={acropolisAtAthens}
            />
          </Box>

          <Stack>
            <audio
              ref={audioPlayer}
              src="https://cdn.simplecast.com/audio/cae8b0eb-d9a9-480d-a652-0defcbe047f4/episodes/af52a99b-88c0-4638-b120-d46e142d06d3/audio/500344fb-2e2b-48af-be86-af6ac341a6da/default_tc.mp3"
              preload="metadata"
            ></audio>
            <CardBody>
              <Heading size="lg">Podcast Name</Heading>
            </CardBody>

            <CardFooter flexDir="column">
              <ButtonGroup mb={4} colorScheme="gray">
                <IconButton icon={<ArrowLeftIcon />} me={3} />
                <Button me={3}>
                  <FontAwesomeIcon icon={faPause} />
                </Button>
                <IconButton icon={<ArrowRightIcon />} me={3} />
              </ButtonGroup>

              <Flex alignItems="center" whiteSpace="nowrap">
                <Slider w="20rem" me={3} colorScheme="blue" ref={progressBar}>
                  <SliderTrack h="0.5rem">
                    <SliderFilledTrack />
                  </SliderTrack>
                  <SliderThumb />
                </Slider>
                <Text fontSize="sm" display="inline-block">
                  <b>{duration}</b> / {(duration && !isNaN(duration)) ? calculateTime(duration) : ""}
                </Text>
              </Flex>
            </CardFooter>
          </Stack>
        </Card>
      </Flex>
    </>
  );
};

export default Audio;
