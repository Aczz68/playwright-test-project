import { test as base } from "@playwright/test";
import { TodoPage } from "./TodoPage";

export const test = base.extend<{ todoPage: TodoPage }>({
  todoPage: async ({ page, request }, use) => {
    // setup optional)
    const todoPage = new TodoPage(page);
    await todoPage.clearTodosAndVisit(request);
    // use
    await use(todoPage);
  },
});

export { expect } from "@playwright/test";
