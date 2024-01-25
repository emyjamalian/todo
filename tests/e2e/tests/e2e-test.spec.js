import randomItem from "./utils/utils";
const { test, expect } = require("@playwright/test");

test.beforeEach(async ({ page }) => {
  await page.goto("https://tasktango.vercel.app/");
});

test.describe("New Todo", () => {
  test("Add a task and verify it appears in the list", async ({ page }) => {
    await expect(page).toHaveTitle("TaskTango - Home Page");

    // Wait for the new task input to appear
    const newTaskInput = await page.waitForSelector(
      'input[placeholder="Add new task"]'
    );

    // Create 1st todo.
    const todoText = randomItem;
    await newTaskInput.fill(todoText);
    await newTaskInput.press("Enter");

    // Wait for the todo list to appear
    const todoListSelector = ".css-bs4x2b";
    await page.waitForSelector(todoListSelector);

    // Assert that the added todo item is in the list
    const addedTodoSelector = `${todoListSelector} .css-8atqhb:has-text("${todoText}") .chakra-editable__preview`; // Adjust with the actual selector
    await page.waitForSelector(addedTodoSelector);
    const addedTodoText = await page.textContent(addedTodoSelector);
    expect(addedTodoText).toContain(todoText);
  });
});
