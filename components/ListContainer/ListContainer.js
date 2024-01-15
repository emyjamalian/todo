import { Container, Heading, Box } from "@chakra-ui/react";
import InputForm from "../InputForm/InputForm";
import TaskList from "../TaskList";

export default function ListContainer({ listTitle }) {
  return (
    <Box
      p="6"
      border="1px"
      borderColor="gray.300"
      w="60%"
      rounded="2xl"
      boxShadow="md"
    >
      <Container>
        <Heading paddingbottom="5" as="h2" size="3xl" mb={5} noOfLines={1}>
          {listTitle}
        </Heading>
        <InputForm />
        <TaskList />
      </Container>
    </Box>
  );
}
