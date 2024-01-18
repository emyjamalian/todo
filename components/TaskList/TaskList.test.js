import TaskList from "./TaskList";
import { render, screen, waitFor } from "@testing-library/react";
import { SWRConfig } from "swr";

// Mocking the useSWR hook
jest.mock("swr");

describe("TaskList Component", () => {
  it("renders loading state and then tasks", async () => {
    const mockData = [
      { _id: "1", title: "Task 1" },
      { _id: "2", title: "Task 2" },
    ];

    // Mocking the useSWR response
    useSWR.mockReturnValue({
      data: mockData,
      error: undefined,
      isLoading: true,
      mutate: jest.fn(),
    });

    render(
      <SWRConfig value={{ dedupingInterval: 0 }}>
        <TaskList />
      </SWRConfig>
    );

    // Loading state should be displayed initially
    expect(screen.getByText("Loading...")).toBeInTheDocument();
    expect(screen.getByRole("status")).toBeInTheDocument();

    // Wait for the loading state to disappear
    await waitFor(() => {
      expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
      expect(screen.queryByRole("status")).not.toBeInTheDocument();
    });

    // Tasks should be displayed
    mockData.forEach((task) => {
      expect(screen.getByText(task.title)).toBeInTheDocument();
    });
  });

  it("renders error state", async () => {
    // Mocking the useSWR response with an error
    useSWR.mockReturnValue({
      data: undefined,
      error: new Error("Failed to fetch"),
      isLoading: false,
      mutate: jest.fn(),
    });

    render(
      <SWRConfig value={{ dedupingInterval: 0 }}>
        <TaskList />
      </SWRConfig>
    );

    // Error state should be displayed
    expect(screen.getByText("failed to load")).toBeInTheDocument();
  });
});
