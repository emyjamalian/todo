import { Checkbox, ListItem, UnorderedList } from "@chakra-ui/react";
import { useTaskStore } from "@/store";

export default function TaskList() {
  const { data: tasks } = useTaskStore();

  return (
    <UnorderedList styleType="none" colorScheme="green.500" spacing={3}>
      {tasks.map((task) => (
        <ListItem key={task._id}>
          <Checkbox key={task._id} href={`/${task._id}`}>
            {task.title}
          </Checkbox>
        </ListItem>
      ))}
    </UnorderedList>
  );
}