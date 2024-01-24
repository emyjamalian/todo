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
      await AddTask(taskTitle);

      const inputElement = event.target.elements.title;
      inputElement && inputElement.focus();

      event.target.reset();
    } catch (error) {
      console.error("Error adding task:", error);
    } finally {
      mutate("/api/tasks");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <AddIcon color="gray.300" />
        </InputLeftElement>
        <Input
          focusBorderColor="teal.400"
          autoFocus
          id="title"
          name="title"
          type="text"
          placeholder="Add new task"
        />
      </InputGroup>
    </form>
  );
}
