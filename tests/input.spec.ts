import { test, expect } from "@playwright/test";

test("input", async ({ page }) => {
  // 处理输入常用方法
  const nameInput = page.getByTestId("name");
  const countInput = page.getByTestId("count");
  //provide a value{{提供一个值}}
  await nameInput.fill("hello");
  //check the value{{检查值}}
  expect(await nameInput.inputValue()).toBe("hello");
  await expect(nameInput).toHaveValue("hello");
  //fill a value{{填充值}}
  await nameInput.fill("world");
  //check the value{{检查值}}
  await expect(nameInput).toHaveValue("hello world");
  //provide a number value{{提供一个值)
  await countInput.fill("123");
  await expect(countInput).toHaveValue("123");

  //Submit a form{{提交表单}}
  await nameInput.press("Enter");
  await countInput.press("Enter");
  await page.getByTestId("submit").click();
});
