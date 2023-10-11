import { test, expect } from "@playwright/test";

test("应该能够清除所有的项目", async ({ request }) => {
  const setResponse = await request.put("http://localhost:3000/api/set-all", {
    data: {
      items: [],
    },
  });
  expect(setResponse.ok()).toBeTruthy();
  expect(setResponse.status()).toBe(200);
  expect(await setResponse.json()).toEqual({ status: "success" });

  const getResponse = await request.get("http://localhost:3000/api/get-all");
  expect(getResponse.ok()).toBeTruthy();
  expect(getResponse.status()).toBe(200);
  expect(await getResponse.json()).toEqual({ items: [] });
});
