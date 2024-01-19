import { render, screen } from "@testing-library/react";
import InputForm from "./AddTaskInput";

test("renders an input field with an addIcon", () => {
  render(<InputForm />);
  const input = screen.getByRole("input", { name: /title/i });
  const addIcon = screen.getByText("AddIcon");
  expect(input).toBeInTheDocument();
  expect(addIcon).toBeInTheDocument();
});
