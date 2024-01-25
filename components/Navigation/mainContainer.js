import React from "react";
import { Container, Heading, Box, Center } from "@chakra-ui/react";

export default function MainContainer({ mainTitle, children }) {
  return (
    <Box p="6" w="100%" border="2px" borderColor="gray.300" borderRadius="50px">
      <Container>
        <Heading
          paddingbottom="5"
          as="h4"
          size="xl"
          mb={5}
          noOfLines={1}
          alignItems="center"
        >
          {mainTitle}
        </Heading>
        {children}
      </Container>
    </Box>
  );
}
