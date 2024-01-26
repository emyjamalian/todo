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
  Badge,
  Heading,

} from "@chakra-ui/react";
import { useTaskStore } from "@/store";


export default function ListsSection() {
  
  const activeList = useTaskStore((state) => state.activeList);
  let countingTasks = useTaskStore((state) => state.countingTasks);

  const numberOfDoneTasks = countingTasks.filter((task) => task.completed).length;
  const numberOfUpcomingTasks = countingTasks.length - numberOfDoneTasks;
  

  



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
              <Box as="a" href="/" alignItems="center" display="flex">
                <ListIcon as={PlusSquareIcon} />
                All Tasks
                <Badge ml="2" borderRadius="full" px="2" colorScheme="gray">
                  {countingTasks.length}
                </Badge>
              </Box>
            </ListItem>
            <ListItem
              className="menu-item"
              color={activeList === "TaskTango - Upcoming" ? "teal" : ""}
              fontWeight={activeList === "TaskTango - Upcoming" ? "bold" : ""}
            >
              <Box as="a" href="/upcoming" alignItems="center" display="flex">
                <ListIcon as={ArrowRightIcon} />
                Upcoming
                <Badge ml="2" borderRadius="full" px="2" colorScheme="gray">
                  {numberOfUpcomingTasks}
                </Badge>
              </Box>
            </ListItem>
            <ListItem
              className="menu-item"
              color={activeList === "TaskTango - Done" ? "teal" : ""}
              fontWeight={activeList === "TaskTango - Done" ? "bold" : ""}
            >
              <Box as="a" href="/done" alignItems="center" display="flex">
                <ListIcon as={CheckCircleIcon} />
                Done
                <Badge ml="2" borderRadius="full" px="2" colorScheme="gray">
                  {numberOfDoneTasks}
                </Badge>
              </Box>
            </ListItem>
            <ListItem className="menu-item">
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
