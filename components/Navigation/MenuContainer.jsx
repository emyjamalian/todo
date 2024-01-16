import { Container, Heading, Box, Menu } from "@chakra-ui/react";
import Search from "./Search";
import TasksSection from "./TasksSection";
import ListsSection from "./ListsSection";

export default function MenuContainer() {
  return (
    <Box
      p="6"
      border="1px"
      borderColor="gray.300"
      w="100%%"
      rounded="2xl"
      boxShadow="md"
    >
      <Container>
        <Heading paddingbottom="5" as="h5" size="2xl" mb={5} noOfLines={1}>
          Menu
          <Menu></Menu>
        </Heading>
        <Search />
        <TasksSection />
        <ListsSection />
      </Container>
    </Box>
  );
}
