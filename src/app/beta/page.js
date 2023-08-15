"use client";

import {
  Avatar,
  Box,
  Flex,
  HStack,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  StackDivider,
  Text,
  Button,
  ButtonGroup,
  Container,
  Divider,
  SimpleGrid,
} from "@chakra-ui/react";
import {
  FiBookmark,
  FiClock,
  FiGrid,
  FiHelpCircle,
  FiMoreVertical,
  FiPieChart,
  FiSearch,
  FiSettings,
  
} from "react-icons/fi";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { DocumentCollapse } from "./DocumentCollapse";
import { Logo } from "./Logo";
import { SidebarButton } from "./SidebarButton";
import { links } from './_data';

export default function App() {
  return (
    <>
      <Flex as="section" minH="100vh">
        <Stack
          flex="1"
          maxW={{ base: "full", sm: "xs" }}
          py={{ base: "6", sm: "8" }}
          px={{ base: "4", sm: "6" }}
          bg="blue.400"
          color="white"
          borderRightWidth="1px"
          justifyContent="space-between"
        >
          <Stack spacing="8">
            <Logo alignSelf="start" />
            <InputGroup>
              <InputLeftElement>
                <Icon as={FiSearch} color="fg.accent.muted" fontSize="lg" />
              </InputLeftElement>
              <Input placeholder="Search" variant="filled.accent" />
            </InputGroup>
            <Stack spacing="1">
              <SidebarButton leftIcon={<FiGrid />}>Dashboard</SidebarButton>
              <SidebarButton leftIcon={<FiPieChart />}>Analysis</SidebarButton>
              <DocumentCollapse />
              <SidebarButton leftIcon={<FiClock />}>History</SidebarButton>
              <SidebarButton leftIcon={<FiBookmark />}>Favorites</SidebarButton>
            </Stack>
          </Stack>
          <Stack
            spacing="4"
            divider={<StackDivider borderColor="bg.accent.subtle" />}
          >
            <Box />
            <Stack spacing="1">
              <SidebarButton leftIcon={<FiHelpCircle />}>
                Help Center
              </SidebarButton>
              <SidebarButton leftIcon={<FiSettings />}>Settings</SidebarButton>
            </Stack>
            <HStack spacing="3" justify="space-between">
              <HStack spacing="3">
                <Avatar boxSize="10" src="https://i.pravatar.cc/300" />
                <Box>
                  <Text textStyle="sm" fontWeight="medium">
                    John Doe
                  </Text>
                  <Text textStyle="sm" color="fg.accent.muted">
                    john@chakra-ui.com
                  </Text>
                </Box>
              </HStack>
              <IconButton
                variant="tertiary.accent"
                icon={<FiMoreVertical />}
                aria-label="Open Menu"
              />
            </HStack>
          </Stack>
        </Stack>
      </Flex>
      <Box bg="bg.accent.default" color="on-acccent">
        <Container as="footer" role="contentinfo">
          <Stack
            justify="space-between"
            align="start"
            direction={{ base: "column", lg: "row" }}
            py={{ base: "12", md: "16" }}
            spacing="8"
          >
            <Stack spacing={{ base: "6", md: "8" }} align="start">
              <Logo />
              <Text color="fg.accent.muted">
                Create beautiful websites remarkably fast.
              </Text>
            </Stack>
            <SimpleGrid
              columns={{ base: 2, md: 4 }}
              gap="8"
              width={{ base: "full", lg: "auto" }}
            >
              {links.map((group, idx) => (
                <Stack key={idx} spacing="4" minW={{ lg: "40" }}>
                  <Text
                    fontSize="sm"
                    fontWeight="semibold"
                    color="fg.accent.subtle"
                  >
                    {group.title}
                  </Text>
                  <Stack spacing="3" shouldWrapChildren>
                    {group.links.map((link, idx) => (
                      <Button
                        key={idx}
                        as="a"
                        variant="text.accent"
                        href={link.href}
                      >
                        {link.label}
                      </Button>
                    ))}
                  </Stack>
                </Stack>
              ))}
            </SimpleGrid>
          </Stack>
          <Divider borderColor="bg.accent.subtle" />
          <Stack
            pt="8"
            pb="12"
            justify="space-between"
            direction={{ base: "column-reverse", md: "row" }}
            align="center"
          >
            <Text fontSize="sm" color="fg.accent.subtle">
              &copy; {new Date().getFullYear()} Chakra UI Pro, Inc. All rights
              reserved.
            </Text>
            <ButtonGroup variant="tertiary.accent">
              <IconButton
                as="a"
                href="#"
                aria-label="LinkedIn"
                icon={<FaLinkedin />}
              />
              <IconButton
                as="a"
                href="#"
                aria-label="GitHub"
                icon={<FaGithub />}
              />
              <IconButton
                as="a"
                href="#"
                aria-label="Twitter"
                icon={<FaTwitter />}
              />
            </ButtonGroup>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
