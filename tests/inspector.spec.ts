// 用剧作家简化的页面对象模型测试模式;

import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page, request }) => {
  await request.put("http://localhost:3000/api/set-all", {
    data: { item: [] },
  });
  await page.goto("http://localhost:3000");
});

test("应该添加todos", async ({ page }) => {
  // 注意如果页面多不看注解根本不知道
  await page.locator(".new-todo").fill("Buy milk");
  await page.locator(".new-todo").press("Enter");
  await page.waitForResponse(/add/);

  await page.locator(".new-todo").fill("Feed the cat");
  await page.locator(".new-todo").press("Enter");
  await page.waitForResponse(/add/);

  await expect(page.locator(".todo-list label")).toHaveText([
    "Buy milk",
    "Feed the cat",
  ]);
});
