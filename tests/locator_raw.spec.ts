import { test } from "@playwright/test";

test("raw selectors", async ({ page }) => {
  //CSS Selector
  await page.locator("button.primary").click();
  //Explicit CSS Selector
  await page.locator("css=button.primary").click();
  //Text Selector
  await page.locator("text=Submit").click();
  //Chain Selectors
  await page.locator("button >>text=Submit").click();
  //nth
  await page.locator("button >> nth=0").click();
  //data-testid(推荐使用)
  await page.locator("data-testid=submit").click();
  //xpath
  await page.locator('xpath=//button [@class="primary"]').click();
  //parent
  await page.locator("button >>..").highlight();
});
