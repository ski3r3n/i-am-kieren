"use client";
import { Box, Heading, Text, Image } from "@chakra-ui/react";
import Header from "@/components/header";
export default function About() {
  return (
    <>
      <Header></Header>
      <Box
        display="flex"
        justifyContent={"center"}
        alignItems={"center"}
        flexDir="column"
        height="100vh">
        <Heading fontSize={"5xl"}>Who is this guy?</Heading>
        <Box display="flex" mt="10">
        <Box
          mr="3"
          rounded="2xl"
          bg="gray.800"
          p="10"
          h="96"
          alignItems={"center"}
          display="flex">
          <Image src="selfie.jpg" h="80"></Image>
        </Box>
        <Box ml="3" rounded="2xl" bg="gray.800" p="10" h="96" w="xl">
          <Text>
            Hello! I'm <b>Kie Ren</b> and and I'm a <b>software developer</b>. I
            typically work in <b>frontend development</b>, mainly with{" "}
            <b>Next.js</b>. I sometimes do some game development in Unity in C#
            too.
            <br />I started to gain an interest in coding when I went to{" "}
            <b>Spain</b> in 2017. There, there was a coding class at the school
            I was attending. It started with <b>Scratch</b>, and before long i
            was working in <b>Python</b> and many other languages. Here I am
            now!
            <br />
            Today, I'm in <b>Hwa Chong Institution</b> as a student, and
            pursuing my passion in coding. I'm also a member of the school's{" "}
            <b>Infocomm</b> club, where I learn more about coding and
            technology.
            <br />
            My other hobbies include playing <b>tetris</b>, <b>geometry dash</b>
            , and other games. I enjoy <b>reading</b> and watching{" "}
            <b>youtube</b> videos in my free time as well.
          </Text>
        </Box>
      </Box></Box>
    </>
  );
}
