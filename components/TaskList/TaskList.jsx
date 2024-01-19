import {
  Checkbox,
  ListItem,
  UnorderedList,
  IconButton,
  Spacer,
  Divider,
  Flex,
} from "@chakra-ui/react";
import { useTaskStore } from "@/store";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

export default function TaskList() {
  const { data: tasks } = useTaskStore();
  console.log("DEBUG LIST: ", tasks);
  return (
    <UnorderedList styleType="none" spacing={5}>
      {tasks.map((task) => (
        <ListItem key={task._id} w="100%">
          <Flex>
            <Checkbox key={task._id} href={`/${task._id}`}>
              {task.title}
            </Checkbox>
            <Spacer />
            <IconButton
              aria-label="Delete a task"
              size="xs"
              margin="0 5px "
              icon={<EditIcon />}
            />
            <IconButton
              aria-label="Delete a task"
              size="xs"
              icon={<DeleteIcon />}
            />
          </Flex>
          <Divider />
        </ListItem>
      ))}
    </UnorderedList>
  );
}
