import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import InputForm from "./AddTaskInput";

test("renders a input field to add new Tasks", () => {
  render(<InputForm />);
  const input = screen.getByRole("textbox", { name: /add New Task/i });

  expect(input).toBeInTheDocument();
});
