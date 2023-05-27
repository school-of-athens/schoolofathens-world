import {
  Box,
  Button,
  ButtonGroup,
  Grid,
  GridItem,
  Heading,
  IconButton,
  Image,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
  Tooltip,
  useBreakpointValue,
} from "@chakra-ui/react";
import ArticleCard from "../components/ArticleCard";
// import article from "../data/sampleArticle";
import {
  faHeading,
  faImage,
  faParagraph,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useNewArticle from "../features/NewArticle/hooks/useNewArticle";
import Editor from "../features/NewArticle/components/Editor";
import { useState } from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";

const Compose = () => {
  const [article, setArticle] = useNewArticle();
  const [showPreview, setShowPreview] = useState(true);
  const { width } = useWindowDimensions();

  const height = useBreakpointValue({
    base: "initial",
    md: "calc(100vh - 4rem)",
  });

  return (
    <Grid templateColumns="repeat(12, 1fr)">
      <GridItem
        colSpan={{ base: 12, md: 6, lg: 5 }}
        height={height}
        overflowY="auto"
        bg="gray.50"
      >
        <Box
          bg="blue.200"
          width="100%"
          p={1}
          position="sticky"
          top="0"
          zIndex={5}
        >
          <Heading mb={0} mx={4} display="flex" justifyContent="space-between">
            Preview
            {width < 768 && (
              <Button
                variant="light"
                minW="0"
                px={3}
                onClick={() => setShowPreview((prev) => !prev)}
              >
                {showPreview ? "Hide" : "Show"}
              </Button>
            )}
          </Heading>
        </Box>
        <Box
          py={12}
          px={8}
          display={showPreview || width >= 768 ? "static" : "none"}
        >
          <ArticleCard article={article} />
        </Box>
      </GridItem>
      <GridItem
        colSpan={{ base: 12, md: 6, lg: 7 }}
        height={height}
        borderLeft="2px solid"
        borderLeftColor="gray.300"
        overflowY="auto"
      >
        <Box
          bg="gray.200"
          width="100%"
          p={1}
          position="sticky"
          top="0"
          zIndex={5}
        >
          <Heading mb={0} mx={4} display="flex" justifyContent="space-between">
            Editor
            <ButtonGroup spacing={2}>
              <Tooltip label="New paragraph" placement="top">
                <IconButton
                  variant="light"
                  minW="0"
                  px={3}
                  icon={<FontAwesomeIcon icon={faParagraph} />}
                  onClick={() => {
                    setArticle((prev) => {
                      return {
                        ...prev,
                        body: [
                          ...prev.body,
                          {
                            type: "p",
                            text: "New paragraph",
                          },
                        ],
                      };
                    });
                  }}
                />
              </Tooltip>
              <Tooltip label="New subtitle" placement="top">
                <IconButton
                  variant="light"
                  minW="0"
                  px={3}
                  icon={<FontAwesomeIcon icon={faHeading} />}
                />
              </Tooltip>
              <Popover border="2px solid green">
                <Menu>
                  <Tooltip label="New image" placement="top">
                    <MenuButton
                      as={IconButton}
                      variant="light"
                      minW="0"
                      px={3}
                      aria-label="Search database"
                      icon={<FontAwesomeIcon icon={faImage} />}
                    />
                  </Tooltip>

                  <MenuList>
                    <MenuItem>
                      <label htmlFor="file-upload">Upload an image</label>
                      <input type="file" id="file-upload" hidden />
                    </MenuItem>

                    <PopoverTrigger>
                      <MenuItem>Paste a source url</MenuItem>
                    </PopoverTrigger>
                  </MenuList>
                </Menu>
                <PopoverContent border="2px solid" borderColor="gray.300">
                  <PopoverCloseButton />
                  <PopoverHeader
                    borderBottom="2px solid"
                    borderBottomColor="gray.300"
                  >
                    Paste the URL of your image here:
                  </PopoverHeader>
                  <PopoverBody>
                    <Input variant="primary" />
                    <Box textAlign="end" mt={2}>
                      <Button variant="light">Confirm</Button>
                    </Box>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
              <Button variant="blue">Submit</Button>
            </ButtonGroup>
          </Heading>
        </Box>
        <Box minH="calc(100vh - 4rem)">
          {article.userId && (
            <Editor article={article} setArticle={setArticle} />
          )}
        </Box>
      </GridItem>
    </Grid>
  );
};

export default Compose;
