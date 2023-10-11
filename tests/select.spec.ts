import { test, expect } from "@playwright/test";

test("radio", async ({ page }) => {
  const select = page.getByTestId("country");
  //select an option
  await select.selectOption("australia");
  await expect(select).toHaveValue("australia");
  //select option by label
  await select.selectOption({ label: "Canada" });
  await expect(select).toHaveValue("canada");
  //submit
  await page.getByTestId("submit").click();
});
