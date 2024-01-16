import useSWR from "swr";

import { Checkbox, ListItem, Spinner, UnorderedList } from "@chakra-ui/react";

export default function TaskList() {
  const { data, isLoading, error, mutate } = useSWR("/api/tasks");

  console.log(data);

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
  mutate();

  if (!data) {
    return;
  }

  return (
    <UnorderedList styleType="none" colorScheme="green.500" spacing={3}>
      {data.map((task) => (
        <ListItem key={task._id}>
          <Checkbox key={task._id} href={`/${task._id}`}>
            {task.title}
          </Checkbox>
        </ListItem>
      ))}
    </UnorderedList>
  );
}
