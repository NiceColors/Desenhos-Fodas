import { Box, Flex, Heading } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import Header from "./components/Header/Index";
import Navbar from "./components/Navbar/Index";
import React from "react";

export const App = () => (
  <>
    <Flex justifyContent="space-between" maxW={1520} m="0 auto" p={12}>
      <Box>
        <Navbar />
        <Header />
      </Box>
      <Box position="fixed" top="0" right="0">
        <ColorModeSwitcher />
      </Box>
    </Flex>
  </>
);
