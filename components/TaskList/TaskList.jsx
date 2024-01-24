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

export default function TaskList({ tasks, mutate }) {
  const toast = useToast();

  const handleDeleteTask = async (taskId) => {
    try {
      await mutate(deleteTask(taskId), {
        populateCache: (_ignore, oldTasks) => {
          return oldTasks.filter((task) => task._id !== taskId);
        },
        revalidate: false,
      });

      toast({
        title: "Task deleted",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
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
      await mutate(
        () =>
          fetch(`/api/tasks/${taskId}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(nextValue),
          }).then((res) => res.json()),
        {
          populateCache: (editedTask, oldTasks) => {
            return oldTasks.map((task) =>
              task._id === editedTask ? editedTask : task
            );
          },
          revalidate: false,
        }
      );
    } catch (error) {
      toast({
        title: "Error editing task",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleCompletedTask = async (taskId) => {
    try {
      await mutate(
        () =>
          fetch(`/api/tasks/${taskId}/toggleCompleted`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          }).then((res) => res.json()),
        {
          populateCache: (updatedTask, oldTasks) => {
            return oldTasks.map((task) =>
              task._id === updatedTask ? updatedTask : task
            );
          },
          revalidate: true, // because this list does not know whether to display all or just a section of the tasks
        }
      );

      toast({
        title: "Task Done",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
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
    <UnorderedList styleType="none" spacing={5} marginTop={5}>
      {tasks.map((task) => (
        <ListItem key={task._id} w="100%">
          <Flex>
            <HStack spacing="12px">
              <Checkbox
                key={task._id}
                // href={`/${task._id}`}
                isChecked={task.completed}
                onChange={() => handleCompletedTask(task._id)}
              ></Checkbox>

              <Editable
                defaultValue={task.title}
                onSubmit={(nextValue) => handleEditTask(task._id, nextValue)}
              >
                <EditablePreview />
                <EditableInput />
              </Editable>
            </HStack>
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
