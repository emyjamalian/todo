import { Input, InputLeftElement, InputGroup } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export default function Search() {
  return (
    <form>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input id="search" name="search" type="text" placeholder="Search" />
      </InputGroup>
    </form>
  );
}
