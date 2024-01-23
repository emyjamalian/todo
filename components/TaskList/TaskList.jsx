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
import { completedTask } from "../Task/functions/completedTask";
import { useSWRConfig } from "swr";

export default function TaskList({ listTitle, tasks }) {
  const toast = useToast();
  const { mutate } = useSWRConfig();

  const handleDeleteTask = async (taskId) => {
    try {
      // Optimistic Update
      mutate(
        "/api/tasks",
        (data) => {
          return data.filter((task) => task._id !== taskId);
        },
        false
      );

      await deleteTask(taskId);

      // Successful delete
      toast({
        title: "Task deleted",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });

      // Revalidate after successful operation
      mutate("/api/tasks");
    } catch (error) {
      // Revert to the previous data on error
      mutate("/api/tasks");
      toast({
        title: "Error deleting task",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleCompletedTask = async (taskID) => {
    try {
      // Optimistic Update
      mutate(
        "/api/tasks",
        (data) => {
          return data.map((task) => {
            if (task._id === taskID) {
              return { ...task, completed: true };
            }
            return task;
          });
        },
        true
      );

      // Mark task as completed
      await completedTask(taskID);

      // Revalidate after successful operation
      mutate("/api/tasks");

      // Show success toast
      toast({
        title: "Task Done",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      // Revert to the previous data on error
      mutate("/api/tasks");

      // Show error toast
      toast({
        title: "Error completing task",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  // const handleEditTask = async (event) => {
  //   event.preventDefault();
  //   const taskFormData = new FormData(event.target);
  //   const taskTitle = Object.fromEntries(taskFormData);

  //   editTask(taskId, taskTitle);
  // };

  return (
    <UnorderedList styleType="none" spacing={5} marginTop={5}>
      {tasks.map((task) => (
        <ListItem key={task._id} w="100%">
          <Flex>
            <Checkbox
              key={task._id}
              // href={`/${task._id}`}
              isChecked={task.completed}
              onChange={() => handleCompletedTask(task._id)}
            >
              {task.title}
            </Checkbox>
            <Spacer />
            {/* <IconButton
              aria-label="Delete a task"
              size="xs"
              margin="0 5px 5px 0"
              icon={<EditIcon />}
            /> */}
            <IconButton
              aria-label="Delete a task"
              size="xs"
              color="red.300"
              margin="0 5px 5px 0"
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
