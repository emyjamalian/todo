import {
  ArrowRightIcon,
  CalendarIcon,
  CopyIcon,
  TimeIcon,
} from "@chakra-ui/icons";
import { List, ListItem, ListIcon, Box, Heading } from "@chakra-ui/react";

export default function TasksSection() {
  return (
    <>
      <Heading color="black" paddingTop="5" size="sm" mb={5} noOfLines={1}>
        {"Tasks"}
      </Heading>
      <Box
        color="gray.800"
        overflow="hidden"
        lineHeight="tight"
        fontSize="sm"
        marginBottom="15"
      >
        <List spacing={3}>
          <ListItem>
            <ListIcon as={ArrowRightIcon} />
            Upcoming
          </ListItem>
          <ListItem>
            <ListIcon as={TimeIcon} />
            Today
          </ListItem>
          <ListItem>
            <ListIcon as={CalendarIcon} />
            Calendar
          </ListItem>
          <ListItem>
            <ListIcon as={CopyIcon} />
            Sticky Wall
          </ListItem>
        </List>
      </Box>
    </>
  );
}
