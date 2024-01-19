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
import { deleteTask } from "../Task/functions/deleteTask";
import useSWR from "swr";

export default function TaskList() {
  const { data: tasks } = useTaskStore();
  const { mutate } = useSWR("/api/tasks/");

  const handleDeleteTask = async (taskId) => {
    deleteTask(taskId);
    mutate();
  };

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
