const { test, expect } = require("@playwright/test");

test.beforeEach(async ({ page }) => {
  await page.goto("https://tasktango.vercel.app/");
});

const TODO_ITEMS = [
  "buy some cheese",
  "feed the cat",
  "book a doctors appointment",
];

test.describe("New Todo", () => {
  test("should allow me to add todo items", async ({ page }) => {
    // create a new todo locator
    const newTask = page.getByPlaceholder("Add new task");
    console.log(newTask);

    // Create 1st todo.
    await newTask.fill(TODO_ITEMS[0]);
    await newTask.press("Enter");

    // Check that input is empty.
    await expect(newTask).toBeEmpty();

    // Make sure the list only has one todo item.
    await expect(page.getByRole("ul > li")).toContainText([TODO_ITEMS[0]]);

    // Create 2nd todo.
    await newTask.fill(TODO_ITEMS[1]);
    await newTask.press("Enter");

    // Make sure the list now has two todo items.
    await expect(page.getByRole("ul > li")).toHaveText([
      TODO_ITEMS[0],
      TODO_ITEMS[1],
    ]);
  });
});

test.describe("Mark all as completed", () => {
  test.beforeEach(async ({ page }) => {
    await createDefaultTodos(page);
    await checkNumberOfTodosInLocalStorage(page, 3);
  });

  test.afterEach(async ({ page }) => {
    await checkNumberOfTodosInLocalStorage(page, 3);
  });

  test("should allow me to mark all items as completed", async ({ page }) => {
    // Complete all todos.
    await page.getByLabel("Mark all as complete").check();

    // Ensure all todos have 'completed' class.
    await expect(page.getByTestId("todo-item")).toHaveClass([
      "completed",
      "completed",
      "completed",
    ]);
    await checkNumberOfCompletedTodosInLocalStorage(page, 3);
  });
});
