import React from "react";
import { Container, Heading, Box, useColorModeValue } from "@chakra-ui/react";
import TaskListContainer from "../TaskListContainer/TaskListContainer";
import DarkMode from "./DarkMode";

export default function MainContainer({ mainTitle, children }) {
  return (
    <Box p="6" w="100%" border="2px" borderColor="gray.300" borderRadius="50px">
      <Container>
        <Heading paddingbottom="5" as="h3" size="3xl" mb={5} noOfLines={1}>
          {mainTitle}
        </Heading>
        {children}
      </Container>
    </Box>
  );
}
