import React from "react";
import { render, screen, within } from "@testing-library/react";
import { Checkbox, ListItem, UnorderedList } from "@chakra-ui/react";

const fruits = [
  { id: 1, name: "Bananas" },
  { id: 2, name: "Apples" },
  { id: 3, name: "Strawberries" },
  { id: 4, name: "Grapes" },
  { id: 5, name: "Oranges" },
];
function FruitList() {
  return (
    <UnorderedList styleType="none" colorScheme="green.500" spacing={3}>
      {fruits.map((fruit) => (
        <ListItem key={fruit.id}>
          <Checkbox>{fruit.name}</Checkbox>
        </ListItem>
      ))}
    </UnorderedList>
  );
}

it("should render list of 5 fruits", () => {
  render(<FruitList />);
  const list = screen.getByRole("list", {
    name: /fruits/i,
  });
  const { getAllByRole } = within(list);
  const items = getAllByRole("listitem");
  expect(items.length).toBe(5);
});
