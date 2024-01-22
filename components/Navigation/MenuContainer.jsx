import { Container, Heading, Box, Menu, Spacer } from "@chakra-ui/react";
import Search from "./Search";
import ListsSection from "./ListsSection";
import DarkMode from "./DarkMode";

export default function MenuContainer() {
  return (
    <Box p="6" color="black" bg="gray.100" maxWidth="346px" borderRadius="50px">
      <Container>
        <Heading paddingbottom="5" as="h5" size="2xl" mb={5} noOfLines={1}>
          Menu
          <Menu></Menu>
        </Heading>
        <Search />
        <ListsSection />
      </Container>
      <Spacer />
      <DarkMode />
    </Box>
  );
}
