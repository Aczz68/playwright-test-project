// 鼠标自动化与剧作家拖放悬停特殊点击

// 根据按钮属性来点击
import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3000/mouse/clicks");
});

test("radio", async ({ page }) => {
  await page.pause();
  const button = page.locator("button");
  const message = page.locator("#message");

  await button.hover();
  await page.mouse.down();
  await page.mouse.up();
  await expect(message).toHaveText("click!");

  await button.click();
  await expect(message).toHaveText("click!");

  await button.dblclick();
  await expect(message).toHaveText("Double click!");

  // 根据按钮属性来点击
  await button.click({ button: "middle" });
  await expect(message).toHaveText("Middle click!");

  await button.click({ modifiers: ["Shift"] });
  await expect(message).toHaveText("Shift click!");
});
