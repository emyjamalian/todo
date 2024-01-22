import { Heading, Box, Menu, Spacer, Flex } from "@chakra-ui/react";
import Search from "./Search";
import ListsSection from "./ListsSection";
import DarkMode from "./DarkMode";

export default function MenuContainer() {
  return (
    <Box p="4" color="black" bg="gray.100" maxWidth="346px" borderRadius="50px">
      <Flex direction="column">
        <Box p="4">
          <Heading paddingbottom="5" as="h5" size="2xl" mb={5} noOfLines={1}>
            Menu
            <Menu></Menu>
          </Heading>
          <Search />
          <ListsSection />
        </Box>
        <Spacer />
        <DarkMode />
      </Flex>
    </Box>
  );
}
