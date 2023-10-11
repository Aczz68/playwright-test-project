// 在playwright 测试中使用 Debugging
import { test, expect } from "@playwright/test";

test.beforeEach(async ({ request, page }) => {
  await request.put("http://localhost:3000/api/set-all", {
    data: { items: [] },
  });
  await page.goto("http://localhost:3000");
});

// 当前启用调试测试
test("should add a todo", async ({ page }) => {
  const newTodoInput = page.locator(".new-todo");
  await newTodoInput.fill("Learn Playwright");
  await newTodoInput.press("Enter");
  await page.waitForResponse(/add/);
  const items = page.locator(".todo-list label");
  await expect(items).toHaveText(["Learn Playwright"]);
});
