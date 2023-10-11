import { test, expect } from "@playwright/test";

// 错误的结果安全保存在测试结果文件夹(teset-results)下

test("demo failing test", async ({ page }) => {
  const newTodoInput = page.locator(".new-todo");
  await newTodoInput.fill("Buy Cheeze");
  await newTodoInput.press("Enter");
  await page.waitForResponse(/add/);
  const items = page.locator(".todo-list label");
  await expect(items).toHaveText(["Buy Cheese"]);
});
