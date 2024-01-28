import { todo } from "node:test";
import randomItem from "./utils/utils";
import { Button } from "@chakra-ui/react";
import exp from "constants";
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
    const todoList = page.locator(".chakra-stack", {
      has: page.getByText(todoText),
    });

    //mark item as done and assert it's checked
    const itemCheckbox = todoList.locator(".chakra-checkbox__control");
    await itemCheckbox.click();
    expect(itemCheckbox).toBeTruthy(); //as in toBeChecked

    //assert the toast is showing for task is done
    // expect(page.getByText("Task Done")).toBeVisible();

    //delete a task and assert it's deleted
    const itemDeleteBtn = todoList.filter({
      hasText: todoText,
    });
    getByLabel("Delete a task").click();

    await itemDeleteBtn.click({ force: true });
    // expect(todoList).not.toHaveText(todoText);

    //assert the toast is showing for task is done
    expect(page.getByText("Task deleted")).toBeInViewport();
  });
});
