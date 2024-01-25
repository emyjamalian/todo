import React from "react";
import { Container, Heading, Box, Badge } from "@chakra-ui/react";

export default function MainContainer({ mainTitle, children }) {
  return (
    <Box p="6" w="100%" border="2px" borderColor="gray.300" borderRadius="50px">
      <Container >
        <Heading display="flex" alignContent="baseline"
        pb={5} as="h3" size="3xl" mb={5} noOfLines={1}>
          {mainTitle}
          {/* <Badge
            fontWeight={200}
            fontSize="3xl"
            ml="4"
            borderRadius="full"
            px="3"
            colorScheme="gray"
          >
            9
          </Badge> */}
        </Heading>
        {children}
      </Container>
    </Box>
  );
}
