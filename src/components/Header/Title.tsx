import { Box, Button, Heading, Icon, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

export default function Title() {
  const lorem =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dolore saepe ipsa iusto quaerat aliquid blanditiis at cupiditate eum unde. Veritatis corporis reiciendis ad placeat laboriosam, dolore saepe ipsa numquam, qui expedita, dicta iusto quaerat inventore aliquid blanditiis at cupiditate eum unde";

  return (
    <>
      <Box maxW="30vw">
        <Heading
          mb={8}
          fontSize={"8xl"}
          fontWeight="regular"
          fontFamily="Alegreya"
        >
          Colors <br />{" "}
          <span>
            Art
            <Text as="span" color="green.300">
              {" "}
              Gallery.
            </Text>
          </span>
        </Heading>
        <Text mb={8} fontWeight="light">
          {lorem}
        </Text>
        <Flex justifyContent="flex-end">
          <Button
            maxW="120px"
            iconSpacing="23px"
            rightIcon={<HiArrowNarrowRight />}
          >
            More
          </Button>
        </Flex>
      </Box>
    </>
  );
}
