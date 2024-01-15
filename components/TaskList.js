import { Checkbox, CheckboxGroup, Spinner, Stack } from "@chakra-ui/react";
import useSWR from "swr";

export default function TaskList() {
  const { data, isLoading } = useSWR("/api/tasks");

  if (isLoading) {
    return (
      <>
        <h1>Loading...</h1>
        <Spinner size="xl" />
      </>
    );
  }

  if (!data) {
    return;
  }
  return (
    <>
      <CheckboxGroup colorScheme="green">
        <Stack spacing={[1, 5]} direction={["column", "row"]}></Stack>
        {data.map((task) => (
          <li key={task._id}>
            <Checkbox href={`/${task._id}`}>{task.title}</Checkbox>
          </li>
        ))}
      </CheckboxGroup>
    </>
  );
}
