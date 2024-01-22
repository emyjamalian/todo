import {
  Checkbox,
  ListItem,
  UnorderedList,
  IconButton,
  Spacer,
  Divider,
  Flex,
  useToast,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { deleteTask } from "../Task/functions/deleteTask";
import useSWR from "swr";

export default function TaskList() {
  const { data: tasks, mutate } = useSWR("/api/tasks/");
  const toast = useToast();

  const handleDeleteTask = async (taskId) => {
    deleteTask(taskId)
      .then(() => {
        toast({
          title: "Task deleted",
          status: "warning",
          duration: 5000, // Duration in milliseconds
          isClosable: true,
        });
      })
      .catch((error) => {
        toast({
          title: "Error deleting task",
          description: error.message,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
    mutate();
  };

  return (
    <UnorderedList styleType="none" spacing={5} marginTop={5}>
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
              margin="0 5px 5px 0"
              icon={<EditIcon />}
            />
            <IconButton
              aria-label="Delete a task"
              size="xs"
              color="red.300"
              icon={<DeleteIcon />}
              onClick={() => handleDeleteTask(task._id)}
            />
          </Flex>
          <Divider />
        </ListItem>
      ))}
    </UnorderedList>
  );
}
