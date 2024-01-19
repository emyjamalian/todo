import { Input, InputLeftElement, InputGroup } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import useSWR from "swr";

export default function InputForm() {
  const { mutate } = useSWR(`/api/tasks/`);
  async function handleSubmit(event) {
    //comment this because the mutate is taking about 1min and this will automatically refresh the form
    // event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
    try {
      const response = await fetch(`/api/tasks/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      mutate();

      event.target.reset();
    } catch (error) {
      console.log("ERROR !!");
    }
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
