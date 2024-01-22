import { Input, InputLeftElement, InputGroup } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import AddTask from "./functions/AddTask";
import { useSWRConfig } from "swr";

export default function InputForm() {
  const { mutate } = useSWRConfig();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const taskTitle = Object.fromEntries(formData);

    try {
      // Optimistic Update
      mutate("/api/tasks", false);

      // Add Task
      await AddTask(taskTitle);

      // Revalidate after successful operation
      mutate("/api/tasks");

      // Focus on the input element
      const inputElement = event.target.elements.title; // "title" is the name attribute of the input
      inputElement && inputElement.focus();

      // Reset form
      event.target.reset();
    } catch (error) {
      // Revert to the previous data on error
      mutate("/api/tasks");
      console.error("Error adding task:", error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <AddIcon color="gray.300" />
        </InputLeftElement>
        <Input id="title" name="title" type="text" placeholder="Add new task" />
      </InputGroup>
    </form>
  );
}
