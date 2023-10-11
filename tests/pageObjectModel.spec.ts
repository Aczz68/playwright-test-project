import { test, expect } from "@playwright/test";
import { TodoPage } from "../test-utils/TodoPage";

test.beforeEach(async ({ page, request }) => {
  await new TodoPage(page).clearTodosAndVisit(request);
});

test("应该能够添加待办事项", async ({ page }) => {
  const todoPage = new TodoPage(page);
  await todoPage.addTodo("Buy milk");
  await todoPage.expectTodos(["Buy milk"]);

  await todoPage.addTodo("Feed the cat");
  await todoPage.expectTodos(["Buy milk", "Feed the cat"]);
});
