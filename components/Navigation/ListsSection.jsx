import { MinusIcon, PlusSquareIcon } from "@chakra-ui/icons";
import { List, ListItem, ListIcon } from "@chakra-ui/react";

export default function ListsSection() {
  return (
    <List spacing={3}>
      <ListItem>
        <ListIcon as={MinusIcon} color="grey.500" />
        Work
      </ListItem>
      <ListItem>
        <ListIcon as={MinusIcon} color="grey.500" />
        Personal
      </ListItem>
      <ListItem>
        <ListIcon as={MinusIcon} color="grey.500" />
        Study
      </ListItem>
      <ListItem>
        <ListIcon as={PlusSquareIcon} color="grey.500" />
        Add New List
      </ListItem>
    </List>
  );
}
