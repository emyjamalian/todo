import { MinusIcon, PlusSquareIcon } from "@chakra-ui/icons";
import { List, ListItem, ListIcon, Heading, Box } from "@chakra-ui/react";

export default function ListsSection() {
  return (
    <>
      <Heading color="black" paddingTop="5" size="sm" mb={5} noOfLines={1}>
        {"Lists"}
      </Heading>
      <Box
        color="gray.800"
        overflow="hidden"
        lineHeight="tight"
        fontSize="sm"
        marginBottom="15"
      >
        <List spacing={3}>
          <ListItem borderRadius="full">
            <ListIcon as={MinusIcon} />
            Work
          </ListItem>
          <ListItem>
            <ListIcon as={MinusIcon} />
            Personal
          </ListItem>
          <ListItem>
            <ListIcon as={MinusIcon} />
            Study
          </ListItem>
          <ListItem>
            <ListIcon as={PlusSquareIcon} />
            Add New List
          </ListItem>
        </List>
      </Box>
    </>
  );
}
