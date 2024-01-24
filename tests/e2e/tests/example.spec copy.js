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
    expect(page.getByText).toBe([TODO_ITEMS[0]]);
  });
});
