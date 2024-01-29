import {
  Heading,
  Box,
  Spacer,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import Search from "./Searchbar";
import ListsSection from "./ListsSection";
import DarkMode from "./DarkMode";
import FunMode from "./FunMode";

export default function MenuContainer() {
  const bg = useColorModeValue("gray.200", "gray.700");

  return (
    <Box
      display="flex"
      justifyContent="center"
      p={["4", "8"]}
      width={["100%", "300px"]}
      height={["10%", "500px"]}
      borderRadius={["50px", "50px"]}
      bg={bg}
    >
      <Flex direction={["none", "column"]}>
        <Box display={["none", "unset"]}>
          <Heading paddingbottom="5" as="h5" size="2xl" mb={5} noOfLines={1}>
            Menu
          </Heading>
          <Search />
        </Box>
        <ListsSection />
        <Spacer />

        <Box display={["none", "unset"]}>
          <DarkMode />
          <FunMode />
        </Box>
      </Flex>
    </Box>
  );
}
