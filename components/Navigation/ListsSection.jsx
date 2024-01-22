import { ArrowRightIcon, CheckCircleIcon, CopyIcon } from "@chakra-ui/icons";
import { List, ListItem, ListIcon, Box, Heading } from "@chakra-ui/react";

export default function ListsSection() {
  return (
    <>
      <Heading color="black" paddingTop="5" size="sm" mb={5} noOfLines={1}>
        {"Lists"}
      </Heading>
      <Box
        color="gray.800"
        overflow="hidden"
        lineHeight="tight"
        fontSize="sm"
        marginBottom="15"
      >
        <nav>
          <List spacing={5}>
            <ListItem class="menu-item">
              <Box as="a" href="/">
                <ListIcon as={ArrowRightIcon} />
                Upcoming
              </Box>
            </ListItem>
            <ListItem class="menu-item">
              <Box as="a" href="/done">
                <ListIcon as={CheckCircleIcon} />
                Done
              </Box>
            </ListItem>
            <ListItem class="menu-item">
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
