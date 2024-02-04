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

    // Wait for the todo list to appear and it has the item
    // const todoList = page.locator(".chakra-stack", {
    //   has: page.getByText(todoText),
    // });

    const ListItem = page.getByRole("listitem").filter({ hasText: todoText });

    //mark item as done and assert it's checked
    const itemCheckbox = ListItem.locator(".chakra-checkbox__control");

    await itemCheckbox.click();
    expect(itemCheckbox).toBeTruthy();

    //assert the toast is showing for task is done
    expect(page.getByText("Task Done")).toBeVisible();

    //delete a task and assert it's deleted
    const itemDeleteBtn = ListItem.locator(
      'button[aria-label="Delete a task"]'
    );

    await itemDeleteBtn.click();
    // expect(todoList).not.toHaveText(todoText);

    const deleteToast = page.locator(
      'region[aria-label="Notifications-bottom"]'
    );
    //assert the toast is showing for task is done
    expect(deleteToast).toBeVisible();

    expect(page.getByText("Task deleted")).toBeInViewport();
  });
});
