import { Container, Heading, Box, Spinner } from "@chakra-ui/react";
import InputForm from "../Task/AddTaskInput";
import useSWR from "swr";
import TaskList from "../TaskList/TaskList";

export default function ListContainer({ listTitle }) {
  const { data, isLoading, error } = useSWR("/api/tasks");

  if (isLoading) {
    return (
      <>
        <h1>Loading...</h1>
        <Spinner size="xl" />
      </>
    );
  }

  if (error) {
    return <div>failed to load</div>;
  }

  if (!data) {
    return;
  }

  return (
    <Box p="6" border="1px" borderColor="gray.300" rounded="2xl" boxShadow="md">
      <Container>
        <Heading paddingbottom="5" as="h5" size="3xl" mb={5} noOfLines={1}>
          {listTitle}
        </Heading>
        <InputForm />
        <TaskList tasks={data} />
      </Container>
    </Box>
  );
}
