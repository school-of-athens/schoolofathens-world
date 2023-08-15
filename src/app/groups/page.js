"use client";

import GroupsTitle from "./components/GroupsTitle";
import GroupCard from "./components/GroupCard";
import ContainerGrid from "@/layouts/ContainerGrid";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Input,
  Link,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Groups() {
  return (
    <>
      <GroupsTitle />

      <Box my={8}>
        
     
          <Box my={4} className="container" bg="blue.300" py={4} borderRadius="md">
            <Heading size="lg" mb={4} textAlign="center" color="white">Community Groups</Heading>
            <Grid templateColumns="repeat(12, 1fr)" gap={4}>
              <GroupCard />
              <GroupCard />
              <GroupCard />
              <GroupCard />
            </Grid>
          </Box>


        <ContainerGrid>
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
        </ContainerGrid>
      </Box>
    </>
  );
}
