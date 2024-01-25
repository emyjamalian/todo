import {
  ArrowRightIcon,
  CheckCircleIcon,
  CopyIcon,
  PlusSquareIcon,
} from "@chakra-ui/icons";
import {
  List,
  ListItem,
  ListIcon,
  Box,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import { useTaskStore } from "@/store";

export default function ListsSection() {
  const activeList = useTaskStore((state) => state.activeList);

  return (
    <>
      <Heading paddingTop="5" size="sm" mb={5} noOfLines={1}>
        {"Lists"}
      </Heading>
      <Box overflow="hidden" lineHeight="tight" fontSize="sm" marginBottom="15">
        <nav>
          <List spacing={5}>
            <ListItem
              color={activeList === "TaskTango - Home Page" ? "teal" : ""}
              fontWeight={activeList === "TaskTango - Home Page" ? "bold" : ""}
              className="menu-item"
            >
              <Box as="a" href="/">
                <ListIcon as={PlusSquareIcon} />
                All Tasks
              </Box>
            </ListItem>
            <ListItem
              className="menu-item"
              color={activeList === "TaskTango - Upcoming" ? "teal" : ""}
              fontWeight={activeList === "TaskTango - Upcoming" ? "bold" : ""}
            >
              <Box as="a" href="/upcoming">
                <ListIcon as={ArrowRightIcon} />
                Upcoming
              </Box>
            </ListItem>
            <ListItem
              className="menu-item"
              color={activeList === "TaskTango - Done" ? "teal" : ""}
              fontWeight={activeList === "TaskTango - Done" ? "bold" : ""}
            >
              <Box as="a" href="/done">
                <ListIcon as={CheckCircleIcon} />
                Done
              </Box>
            </ListItem>
            <ListItem className="menu-item">
              <Box as="a" href="/stickywall">
                <ListIcon as={CopyIcon} />
                Sticky Wall
              </Box>
            </ListItem>
          </List>
        </nav>
      </Box>
    </>
  );
}
