import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import InputForm from "./AddTaskInput";

test("renders a input field", () => {
  render(<InputForm />);
  const input = screen.getByRole("textbox");

  expect(input).toBeInTheDocument();
});
