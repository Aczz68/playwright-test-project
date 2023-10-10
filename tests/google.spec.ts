import { test, expect } from "@playwright/test";

test("Page demo", async ({ page }) => {
  // type="search"
  await page.goto("https://www.google.com");
  // 定位器:标题属性为搜索的
  const input = page.locator("[type=search]");
  // 输入内容 input.type('playwright')
  await input.fill("playwright");
  // 按下按键 input.press('Enter')
  await input.press("Enter");
  await expect(page).toHaveTitle("playwright - Google 搜尋");
});
