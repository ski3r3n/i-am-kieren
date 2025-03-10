"use client";
import { Box, Heading, Link } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Box
        h="12"
        w="100vw"
        p="2"
        display="flex"
        position="absolute"
        bg="gray.800"
        alignContent={"center"}>
        <Heading mr="auto">
          <Link href="/">Ski3r3n</Link>
        </Heading>
        <Box ml="3" alignContent={"center"}>
          <Link href="/about">About</Link>
        </Box>
        <Box ml="3" alignContent={"center"}>
          <Link href="/contact">Contact</Link>
        </Box>
      </Box>
    </>
  );
}
