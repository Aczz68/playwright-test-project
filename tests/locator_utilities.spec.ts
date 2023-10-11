import { test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3000/locators");
});

test("locator utilities", async ({ page }) => {
  // CSS Selector
  await page.locator("button.secondary").click();
  // get form field with its associated label text
  // 获取带有相关标签文本的表单字段
  await page.getByLabel("Name").fill("getByLabel");
  // get using placeholder
  // 获取使用占位符
  await page
    .getByPlaceholder("person@example.com")
    .fill("getByPlaceholder@example.com");
  // title属性
  await page.getByTitle("Submit").click();
  // contains text
  // 包含文字
  await page.getByText("Reset").click();
  // chaining locators
  // 连接定位器
  await page.locator("form").locator(".actions").getByText("Submit").click();
  // nth
  await page.locator("button").first().click();
  await page.locator("button").last().click();
  await page.locator("button").nth(0).click();
  // parent(父元素)
  await page.locator("button").locator("..").click();

  // data-testid(最推荐方法)
  await page.getByTestId("submit").click();
});
