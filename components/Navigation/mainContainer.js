import { Container, Heading, Box } from "@chakra-ui/react";
import ListContainer from "../TaskListContainer/TaskListContainer";

export default function MainContainer({ mainTitle }) {
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
        <ListContainer />
      </Container>
    </Box>
  );
}
