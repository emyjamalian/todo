import {
  Checkbox,
  ListItem,
  UnorderedList,
  IconButton,
  Spacer,
  HStack,
  Divider,
  Flex,
  useToast,
  Editable,
  EditableInput,
  EditablePreview,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { deleteTask } from "../Task/functions/deleteTask";
import { editTask } from "../Task/functions/editTask";
import { completedTask } from "../Task/functions/completedTask";
import { useSWRConfig } from "swr";

export default function TaskList({ tasks }) {
  const toast = useToast();
  const { mutate } = useSWRConfig();

  const handleDeleteTask = async (taskId) => {
    try {
      await deleteTask(taskId);

      toast({
        title: "Task deleted",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });

      mutate("/api/tasks");
    } catch (error) {
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
  const handleEditTask = async (taskId, nextValue) => {
    try {
      mutate(
        "/api/tasks",
        (data) => {
          return data.map((task) => {
            if (task._id === taskId) {
              return { ...task, title: nextValue };
            }
            return task;
          });
        },
        true
      );
      await editTask(taskId, nextValue);

      mutate("/api/tasks");
    } catch (error) {
      mutate("/api/tasks");
    }
  };

  const handleCompletedTask = async (taskId) => {
    try {
      await completedTask(taskId);

      mutate("/api/tasks");

      toast({
        title: "Task Done",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      mutate("/api/tasks");

      toast({
        title: "Error completing task",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <UnorderedList styleType="none" spacing={0} marginTop={5}>
      {tasks.map((task) => (
        <ListItem
        borderRadius={10}
          key={task._id}
          
          w="100%"
          p={1.5}
          pl={3}
          pr={3}
          _hover={{
            size: "xl",
            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
            transition: "box-shadow 0.3s",
          }}
        >
          <Flex>
            <HStack spacing="12px">
              <Checkbox
                key={task._id}
                isChecked={task.completed}
                onChange={() => handleCompletedTask(task._id)}
              ></Checkbox>

              <Editable
              width="100%"
                defaultValue={task.title}
                onSubmit={(nextValue) => handleEditTask(task._id, nextValue)}
              >
                <EditablePreview />
                <EditableInput width="auto"/>
              </Editable>
            </HStack>
            <Spacer />
            <IconButton
_focus={{
  boxShadow:
    '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
}}
aria-label="Delete a task"
              size="xs"
              color="red.300"
              margin="4px 0 0 0"
              icon={<DeleteIcon />}
              onClick={() => handleDeleteTask(task._id)}
              
            />
          </Flex>
          {/* <Divider /> */}
        </ListItem>
      ))}
    </UnorderedList>
  );
}
