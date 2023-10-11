import { test, expect } from "@playwright/test";

test("drag", async ({ page }) => {
  await page.pause();

  const alpha = page.getByTestId("alpha");
  const omega = page.getByTestId("omega");
  const containerChildren = page.getByTestId("container").locator("*");

  await expect(containerChildren).toHaveText(["alpha", "omega"]);

  /*Manual Drag and Drop{{手动拖拽}} */
  await alpha.hover();
  await page.mouse.down();
  await omega.hover();
  await page.mouse.up();
  await expect(containerChildren).toHaveText(["omega", "alpha"]);

  /*Explicit Drag and Drop{{显示拖放}} */
  await alpha.dragTo(omega);
  await expect(containerChildren).toHaveText(["alpha", "omega"]);
});
