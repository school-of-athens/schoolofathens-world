"use client";

import { Box, Grid, GridItem, Link, Flex, Image } from "@chakra-ui/react";
import NextLink from "next/link";

const Footer = () => {
  return (
    <Box px={8} bg="blue.400" color="white">
      <Grid templateColumns="repeat(12, 1fr)">
        <GridItem
          display="flex"
          colSpan={{ base: 12, md: 6 }}
          justifyContent={{ base: "center", md: "start" }}
        >
          <Flex
            h="4rem"
            alignItems="center"
            px={3}
            border="4px solid transparent"
            justifyContent="center"
          >
            <Link
              as={NextLink}
              _hover={{ textDecoration: "none" }}
              href="/"
              fontFamily="Merriweather, serif"
              color="white"
              fontSize="md"
              mb={0}
            >
              The School of Athens
            </Link>
          </Flex>
        </GridItem>

        <GridItem
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          justifyContent={{ base: "center", md: "end" }}
          colSpan={{ base: 12, md: 6 }}
          alignItems="center"
        >
          <Link
            display="flex"
            alignItems="center"
            color="white"
            fontSize="1rem"
            as={NextLink}
            href="/"
            _hover={{ textDecoration: "none" }}
            mx={4}
            my={2}
          >
            Home
          </Link>
          <Link
            display="flex"
            alignItems="center"
            color="white"
            fontSize="1rem"
            as={NextLink}
            href="about"
            _hover={{ textDecoration: "none" }}
            mx={4}
            my={2}
          >
            About
          </Link>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Footer;
