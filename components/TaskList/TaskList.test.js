import TaskList from "./TaskList";
import { render, screen, waitFor } from "@testing-library/react";

const fruitsToShop = [
  { _id: 1, title: "Task 1", completed: false },
  { _id: 2, title: "Task 2", completed: false },
  { _id: 3, title: "Task 3", completed: false },
  { _id: 4, title: "Task 4", completed: false },
  { _id: 5, title: "Task 5", completed: false },
];

describe("view a list of tasks", () => {
  it("render the tasklist", () => {
    const list = render(<TaskList tasks={fruitsToShop} />);

    expect(screen.getByText("Task 1")).toBeInTheDocument();

    const items = screen.getAllByRole("listitem");
  });
});
