import {
  Heading,
  Box,
  Menu,
  Spacer,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import Search from "./Search";
import ListsSection from "./ListsSection";
import DarkMode from "./DarkMode";
import FunMode from "./FunMode";

export default function MenuContainer() {
  const bg = useColorModeValue("gray.200", "gray.700");

  return (
    <Box p="4" maxWidth="346px" borderRadius="50px" bg={bg}>
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
        <FunMode />
      </Flex>
    </Box>
  );
}
