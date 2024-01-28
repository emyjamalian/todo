import {
  Heading,
  Box,
  Menu,
  Flex,
  useColorModeValue,
  Divider,
  Container
} from "@chakra-ui/react";
import Search from "./Searchbar";
import ListsSection from "./ListsSection";
import DarkMode from "./DarkMode";
import FunMode from "./FunMode";

export default function MenuContainer() {
  const bg = useColorModeValue("gray.200", "gray.700");

  return (
    <Box p="4" width={['100%', 346]} height="500px" borderRadius="50px" bg={bg}>
      <Flex direction="column" justifyContent="space-between">
        <Box p="4">
          <Container display={["none", "inherit"]}>
          <Heading paddingbottom="5" as="h5" size="2xl" mb={5} noOfLines={1}>
            Menu
            <Menu></Menu>
          </Heading>
          <Search />
          </Container>
          <ListsSection />
        </Box>

        <Box margin="50px 20px">
          <DarkMode />
          <Divider mb={1} />
          <FunMode />
        </Box>
      </Flex>
    </Box>
  );
}
