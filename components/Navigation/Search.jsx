import { Input, InputLeftElement, InputGroup } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

export default function Search() {
  return (
    <form>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <Search2Icon color="black" />
        </InputLeftElement>
        <Input
          id="search"
          name="search"
          type="text"
          placeholder="Search..."
          _placeholder={{ opacity: 1, color: "gray.500" }}
          // color="black"
          bg="gray.100"
          borderRadius="full"
          width="auto"
        />
      </InputGroup>
    </form>
  );
}
