
import { useTaskStore } from "@/store";
import { Checkbox, ListItem, Spinner, UnorderedList } from "@chakra-ui/react";

export default function TaskList() {
 
  const {data} = useTaskStore()

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
