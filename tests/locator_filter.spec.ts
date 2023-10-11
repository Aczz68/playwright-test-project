import { test } from "@playwright/test";
test("locator filter", async ({ page }) => {
  //通过属定位器
  await page
    .locator(".field")
    .filter({ has: page.getByTestId("name") })
    .click();

  //通过相关文本
  await page.locator(".field").filter({ hasText: "Email" }).click();
});
