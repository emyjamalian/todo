import { Input, InputLeftElement, InputGroup } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

export default function Search() {
  return (
    <form>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <Search2Icon color="gray.00" />
        </InputLeftElement>
        <Input id="search" name="search" type="text" placeholder="Search" />
      </InputGroup>
    </form>
  );
}
