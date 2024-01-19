import { Input, InputLeftElement, InputGroup } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { useTaskStore } from "@/store";

export default function InputForm() {
  const { addTask } = useTaskStore();
  async function handleSubmit(event) {
    //comment this because the mutate is taking about 1min and this will automatically refresh the form
    event.preventDefault();
    const formData = new FormData(event.target);
    const task = Object.fromEntries(formData);
    console.log("DEBUG TASK: ", task);
    try {
      const response = await fetch(`/api/tasks/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(task),
      });
      if (!response.ok) {
        throw new Error("Error!");
      }
      addTask(await response.json());
    } catch (error) {
      console.log("ERROR !!", error);
    }

    event.target.reset();
  }

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
