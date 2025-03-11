"use client";
import { Box, Heading, Text, Grid } from "@chakra-ui/react";
import GridCard from "@/components/GridCard";
import Header from "@/components/header";
export default function Contact() {
  return (
    <>
      <Header></Header>
      <Box
        mt="-9"
        display="flex"
        justifyContent={"center"}
        alignItems={"center"}
        flexDir="column"
        height="100vh">
        {" "}
        <Heading size="3xl">Contact me</Heading>
        <Text mt="3" mb="3">
          I have too many accounts. Here are those I sometimes check.
        </Text>
        <Grid
          h="200px"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(3, 1fr)"
          gap={4}>
          <GridCard link="https://x.com/ski3r3n">  
            <Box display="flex" alignContent={"center"}>
              <Heading w="fit" m="auto">
                Twitter
              </Heading>
            </Box>
            <Text m="auto" w="fit" textAlign={"center"}>
              I scroll through my fyp here this to prevent boredom.
            </Text>
          </GridCard>
          <GridCard link="https://github.com/ski3r3n">
            <Box display="flex" alignContent={"center"}>
              <Heading w="fit" m="auto">
                Github
              </Heading>
            </Box>
            <Text m="auto" w="fit" textAlign={"center"}>
              I upload my code here. You can check out my projects here.
            </Text>
          </GridCard>
          <GridCard link="https://t.me/ski3r3n">
            <Box display="flex" alignContent={"center"}>
              <Heading w="fit" m="auto">
                Telegram
              </Heading>
            </Box>
            <Text m="auto" w="fit" textAlign={"center"}>
              I occasionally check this. Don&apos;t really expect a reply quickly.
            </Text>
          </GridCard>
          <GridCard link="https://discord.com/users/978901784825315338">
            <Box display="flex" alignContent={"center"}>
              <Heading w="fit" m="auto">
                Discord
              </Heading>
            </Box>
            <Text m="auto" w="fit" textAlign={"center"}>
              I am quite active here, but don&apos;t expect a ping to work.
            </Text>
          </GridCard>
          <GridCard link="https://ch.tetr.io/u/ski3r3n">
            <Box display="flex" alignContent={"center"}>
              <Heading w="fit" m="auto">
                Tetrio
              </Heading>
            </Box>
            <Text m="auto" w="fit" textAlign={"center"}>
              This is my tetrio account. I play this game a lot.
            </Text>
          </GridCard>
          <GridCard link="mailto://kieren.siew@gmail.com">
            <Box display="flex" alignContent={"center"}>
              <Heading w="fit" m="auto">
                Email
              </Heading>
            </Box>
            <Text m="auto" w="fit" textAlign={"center"}>
              I hardly check this. Don&apos;t expect a reply quickly.
            </Text>
          </GridCard>
        </Grid>
      </Box>
    </>
  );
}
