"use client";
import { Box, Heading, Text, Link } from "@chakra-ui/react";
import Header from "@/components/header";
export default function Home() {
  return (
    <>
      <Header></Header>
      <Box
        flex={1}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        height="100vh">
        <Box>
          <Box>
            <Text
              fontSize={"3xl"}
              mb="3"
              data-state="open"
              opacity={0}
              _open={{
                animationName: "fade-in",
                animationDuration: "1s",
                animationDelay: "0.2s",
                animationFillMode: "forwards",
              }}>
              This is
            </Text>
            <Heading
              display={"flex"}
              flexDir={"row"}
              w={"fit"}
              fontSize={"8xl"}
              size={"7xl"}
              p="3"
              rounded="2xl"
              bg="gray.700"
              data-state="open"
              opacity={0}
              _open={{
                animationName: "fade-in",
                animationDuration: "1s",
                animationDelay: "0.5s",
                animationFillMode: "forwards",
              }}>
              Kie Ren
            </Heading>
          </Box>
          <Box
            mt="3"
            p="3"
            fontSize={"2xl"}
            bg={"gray.800"}
            rounded="2xl"
            data-state="open"
            w="fit"
            opacity={0}
            _open={{
              animationName: "fade-in",
              animationDuration: "1s",
              animationDelay: "0.8s",
              animationFillMode: "forwards",
            }}>
            ski3r3n
          </Box>
          <Text
            mt="5"
            fontSize={"xl"}
            color={"gray.500"}
            data-state="open"
            opacity={0}
            _open={{
              animationName: "fade-in",
              animationDuration: "1s",
              animationDelay: "1s",
              animationFillMode: "forwards",
            }}>
            •{" "}
            <Link
              href="https://github.com/ski3r3n"
              target="_blank"
              textDecor={"underline"}>
              coding
            </Link>{" "}
            •{" "}
            <Link
              href="https://ch.tetr.io/u/ski3r3n"
              target="_blank"
              textDecor={"underline"}>
              tetrio
            </Link>{" "}
            •{" "}
            <Link
              href="https://open.spotify.com/playlist/3B1cPOiyaPbsJbAwbIG9Ao?si=bac90b1b771c4a36"
              target="_blank"
              textDecor={"underline"}>
              kawaiiFutureBass
            </Link>{" "}
            •{" "}
            <Link
              href="https://gdbrowser.com/u/ski3r3n"
              target="_blank"
              textDecor={"underline"}>
              geometryDash
            </Link>{" "}
            •
          </Text>
        </Box>
        <Box ml="5em" display="flex" flexDir="column">
          <Link href="/about">
            <Heading
              p="3"
              bg="gray.700"
              rounded="2xl"
              size="5xl"
              mb="7"
              data-state="open"
              opacity={0}
              _open={{
                animationName: "fade-in",
                animationDuration: "1s",
                animationDelay: "0.7s",
                animationFillMode: "forwards",
              }}>
              About Me
            </Heading>
          </Link>
          <Link href="/contact">
            <Heading
              p="3"
              bg="gray.700"
              rounded="2xl"
              size="5xl"
              data-state="open"
              opacity={0}
              _open={{
                animationName: "fade-in",
                animationDuration: "1s",
                animationDelay: "1s",
                animationFillMode: "forwards",
              }}>
              Contact
            </Heading>
          </Link>
        </Box>
      </Box>
    </>
  );
}
