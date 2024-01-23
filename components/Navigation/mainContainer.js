import React from "react";
import { Container, Heading, Box } from "@chakra-ui/react";

export default function MainContainer({ mainTitle, children }) {
  return (
    <Box
      p="6"
      w="100%"
      color="black"
      border="2px"
      borderColor="gray.300"
      borderRadius="50px"
    >
      <Container>
        <Heading paddingbottom="5" as="h3" size="3xl" mb={5} noOfLines={1}>
          {mainTitle}
        </Heading>
        {children}
      </Container>
    </Box>
  );
}
