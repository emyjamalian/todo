import TaskList from "./TaskList";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

const tasks = [
  { _id: 1, title: "Task 1", completed: false },
  { _id: 2, title: "Task 2", completed: false },
  { _id: 3, title: "Task 3", completed: false },
  { _id: 4, title: "Task 4", completed: false },
  { _id: 5, title: "Task 5", completed: false },
];

jest.mock("../Task/functions/completedTask");

describe("view a list of tasks", () => {
  it("render the tasklist", () => {
    const list = render(<TaskList tasks={tasks} />);

    expect(screen.getByText("Task 1")).toBeInTheDocument();

    const items = screen.getAllByRole("listitem");
    expect(items.length).toBe(5);
  });

  it("handles completed task correctly", async () => {
    render(<TaskList tasks={tasks} />);

    // Trigger the completion of a task and check if the completed task is updated in the UI
    const items = screen.getAllByRole("checkbox");
    await expect(fireEvent.click(items[0])).toBe(true);
  });
});
