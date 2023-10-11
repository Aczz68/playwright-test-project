import { test, expect } from "@playwright/test";

test("radio", async ({ page }) => {
  const apple = page.getByTestId("apple");
  const orange = page.getByTestId("orange");
  const other = page.getByTestId("other");

  //read the value{{}}
  await expect(apple).not.toBeChecked();
  await expect(orange).not.toBeChecked();
  await expect(other).not.toBeChecked();

  //click a radio{{}}
  await apple.click();
  await expect(apple).toBeChecked();
  await expect(orange).not.toBeChecked();
  await expect(other).not.toBeChecked();

  await orange.click();
  await expect(apple).not.toBeChecked();
  await expect(orange).toBeChecked();
  await expect(other).not.toBeChecked();

  //check{{}}
  await other.check();
  await expect(apple).not.toBeChecked();
  await expect(orange).not.toBeChecked();
  await expect(other).toBeChecked();
});
