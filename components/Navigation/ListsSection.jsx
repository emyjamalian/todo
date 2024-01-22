import {
  ArrowRightIcon,
  PlusSquareIcon,
  CheckCircleIcon,
  CopyIcon,
} from "@chakra-ui/icons";
import {
  List,
  ListItem,
  ListIcon,
  Box,
  Heading,
  Spacer,
} from "@chakra-ui/react";

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
        <List spacing={3}>
          <ListItem>
            <ListIcon as={ArrowRightIcon} />
            Upcoming
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} />
            Done
          </ListItem>
          <ListItem>
            <ListIcon as={CopyIcon} />
            Sticky Wall
          </ListItem>
        </List>
      </Box>
    </>
  );
}
