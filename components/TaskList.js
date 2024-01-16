import { Checkbox, ListItem, UnorderedList } from "@chakra-ui/react";

export default function TaskList({tasks}) {
 
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
