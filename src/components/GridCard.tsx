"use client";
import { Box, GridItem, Link } from "@chakra-ui/react";
import { SocialIcon } from "react-social-icons";
export default function GridCard({
  children,
  link,
}: {
  children: React.ReactNode;
  link: string;
}) {
  return (
    <Link target="_blank" href={link}>
      <GridItem
        rowSpan={1}
        colSpan={1}
        bg="gray.800"
        rounded="2xl"
        w="20em"
        h="12em"
        p="3"
        display="flex"
        justifyContent="center"
        alignItems="center">
        {
          <Box>
            <Box m="auto" w="fit">
              <SocialIcon url={link} as="div"></SocialIcon>
            </Box>
            {children}
          </Box>
        }
      </GridItem>
    </Link>
  );
}
// this is just formatting, makes code cleaner
