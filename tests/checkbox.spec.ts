import { test, expect } from "@playwright/test";

test("checkbox", async ({ page }) => {
  const checkbox = page.getByTestId("terms");

  //read the value
  expect(await checkbox.isChecked()).toBe(false);
  await expect(checkbox).not.toBeChecked();
  //click to check uncheck
  await checkbox.click();
  await expect(checkbox).toBeChecked();
  await checkbox.click();
  await expect(checkbox).not.toBeChecked();
  //check uncheck(推荐方法)
  await checkbox.check();
  await expect(checkbox).toBeChecked();
  await checkbox.uncheck();
  await expect(checkbox).not.toBeChecked();
});
