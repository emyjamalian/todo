import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import InputForm from "./InputForm";

test("renders an input field with an addIcon", () => {
  render(<InputForm />);
  const input = screen.getByRole("input", { name: /title/i });
  const addIcon = screen.getByText("AddIcon");
  expect(input).toBeInTheDocument();
  expect(addIcon).toBeInTheDocument();
});
