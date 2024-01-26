import {
  CheckCircleIcon,
  CopyIcon,
  RepeatClockIcon,
  HamburgerIcon,
} from "@chakra-ui/icons";
import {
  List,
  ListItem,
  ListIcon,
  Box,
  Badge,
  Heading,
  Spacer,
} from "@chakra-ui/react";
import { useTaskStore } from "@/store";

export default function ListsSection() {
  const activeList = useTaskStore((state) => state.activeList);
  let countingTasks = useTaskStore((state) => state.countingTasks);

  const numberOfDoneTasks = countingTasks.filter(
    (task) => task.completed
  ).length;
  const numberOfUpcomingTasks = countingTasks.length - numberOfDoneTasks;

  return (
    <>
      <Heading paddingTop="5" size="sm" mb={5} noOfLines={1}>
        {"Lists"}
      </Heading>
      <Box overflow="hidden" lineHeight="tight" fontSize="sm" marginBottom="15">
        <nav>
          <List spacing={3}>
            <ListItem
              p="1"
              borderRadius="full"
              bg={activeList === "TaskTango - Home Page" ? "gray.300" : ""}
            >
              <Box as="a" href="/" display="flex" alignItems="center">
                <ListIcon as={HamburgerIcon} />
                All Tasks
                <Spacer />
                <Badge ml="2" borderRadius="full" px="2" colorScheme="gray">
                  {countingTasks.length}
                </Badge>
              </Box>
            </ListItem>
            <ListItem
              p="1"
              borderRadius="full"
              bg={activeList === "TaskTango - Upcoming" ? "gray.300" : ""}
            >
              <Box as="a" href="/upcoming" alignItems="center" display="flex">
                <ListIcon as={RepeatClockIcon} />
                Upcoming
                <Spacer />
                <Badge ml="2" borderRadius="full" px="2" colorScheme="gray">
                  {numberOfUpcomingTasks}
                </Badge>
              </Box>
            </ListItem>
            <ListItem
              p="1"
              borderRadius="full"
              bg={activeList === "TaskTango - Done" ? "gray.300" : ""}
            >
              <Box as="a" href="/done" alignItems="center" display="flex">
                <ListIcon as={CheckCircleIcon} />
                Done
                <Spacer />
                <Badge ml="2" borderRadius="full" px="2" colorScheme="gray">
                  {numberOfDoneTasks}
                </Badge>
              </Box>
            </ListItem>
            <ListItem p="1">
              <Box as="a" href="/stickywall" alignItems="center" display="flex">
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
