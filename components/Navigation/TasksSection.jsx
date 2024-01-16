import {
  ArrowRightIcon,
  CalendarIcon,
  CopyIcon,
  TimeIcon,
} from "@chakra-ui/icons";
import { List, ListItem, ListIcon, Card } from "@chakra-ui/react";

export default function TasksSection() {
  return (
    <Card>
      <List spacing={3}>
        <ListItem>
          <ListIcon as={ArrowRightIcon} color="grey.500" />
          Upcoming
        </ListItem>
        <ListItem>
          <ListIcon as={TimeIcon} color="grey.500" />
          Today
        </ListItem>
        <ListItem>
          <ListIcon as={CalendarIcon} color="grey.500" />
          Calendar
        </ListItem>
        <ListItem>
          <ListIcon as={CopyIcon} color="grey.500" />
          Sticky Wall
        </ListItem>
      </List>
    </Card>
  );
}
