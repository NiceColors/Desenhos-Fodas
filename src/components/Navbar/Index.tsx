import {
  Divider,
  Text,
  Flex,
  Heading,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Index() {
  return (
    <>
      <Flex
        justifyContent="space-around"
        borderBottom={`1px solid ${useColorModeValue("black", "white")}`}
      >
        <Heading></Heading>
        <Box
          display="flex"
          w="300px"
          justifyContent="space-between"
          fontSize="1.275rem"
          fontWeight="regular"
        >
          <Text color="pink.600">About</Text>
          <Text>Artists</Text>
          <Text>Exhibitions</Text>
        </Box>
      </Flex>
    </>
  );
}
