"use client";

import LearnTitle from "./components/LearnTitle";
import InsightList from "./components/InsightList";
import useArticleList from "./hooks/useArticleList";
import {
  Box,
  Card,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Container,
  Grid,
  Heading,
  Flex,
  GridItem,
  Input,
  Stack,
  Divider,
  Select,
  FormControl,
  FormLabel,
  Checkbox,
} from "@chakra-ui/react";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import useAuthRedirect from "@/hooks/useAuthRedirect";

export default function Learn() {
  const { articles, isLoading } = useArticleList();
  const { width } = useWindowDimensions();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [drawerContent, setDrawerContent] = useState("");

  return (
    <>
      {/* <LearnTitle /> */}
      <Box bg="gray.50">
        <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xl">
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create your account</DrawerHeader>

            <DrawerBody>
              {/* <Input placeholder="Type here..." /> */}
              {drawerContent}
            </DrawerBody>

            <DrawerFooter>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>

        <Box bg="gray.100">
          <Container maxW="6xl">
            <Grid templateColumns="repeat(12, 1fr)">
              <LearnTitle />

              <InsightList articles={articles} onOpen={onOpen} setDrawerContent={setDrawerContent} />
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
}
