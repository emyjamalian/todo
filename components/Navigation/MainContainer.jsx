import React from "react";
import { Container, Heading, Box, Badge } from "@chakra-ui/react";

export default function MainContainer({ mainTitle, children }) {
  return (
    <Box
      p="6"
      width={['100%', 500]}
      height={["90%", "500px"]}
      border="2px"
      borderColor="gray.300"
      borderRadius="50px"
      overflowY="auto"
    >
      <Container>
        <Heading
          display="flex"
          alignContent="baseline"
          pb={5}
          as="h3"
          size="3xl"
          mb={5}
          noOfLines={1}
        >
          {mainTitle}
        </Heading>
        {children}
      </Container>
    </Box>
  );
}
