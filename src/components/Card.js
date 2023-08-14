import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  return (
    <Box boxSize={"sm"} bgColor={"white"} color={"black"} borderRadius={7}>
      <VStack spacing={4} alignItems={"flex-start"}>
        <Image src={imageSrc} alt="Dan Abramov" borderRadius={7} />
        <Box padding={1}>
          <Heading as="h5" size="sm" sx={{}}>
            {title}
          </Heading>
          <Text fontSize="sm">{description}</Text>
          <HStack spacing={4}>
            <Text>See more</Text>
            <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </HStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default Card;
