import {
  Box,
  Button,
  Heading,
  Icon,
  Flex,
  Text,
  Image,
  Grid,
  GridItem,
  useColorModeValue
} from "@chakra-ui/react";
import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Art from "./Art";
import Title from "./Title";

export default function Index() {
  return (
    <>
      <Grid gap={2}>
        <Grid
          className="galeryHome"
          position="relative"
          top={20}
          templateColumns="repeat(3, 1fr)"
          gridAutoRows="100px"
          gap={4}
        >
          <GridItem w="600px">
            <Title />
            <Box
              position="relative"
              left="150px"
              w="450px"
              mt={8}
              h="600px"
              bg={useColorModeValue("#101828", "white")}
            />
          </GridItem>

          <GridItem>
            <Box mb="2" w="500px" h="600px" bg={useColorModeValue("#101828", "white")} />
            <Box w="500px" h="450px" bg={useColorModeValue("#101828", "white")} />
          </GridItem>

          <GridItem>
            <Box mb="2" w="300px" h="200px" bg={useColorModeValue("#101828", "white")} />
            <Box mb="2" w="300px" h="600px" bg={useColorModeValue("#101828", "white")} />
            <Box w="300px" h="240px" bg={useColorModeValue("#101828", "white")} />
          </GridItem>
        </Grid>
      </Grid>
      <Image position="absolute" top="560px" src="./figOne.svg" />
    </>
  );
}
