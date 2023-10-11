// 点击执行测试,会显示测试输出
import { test } from "@playwright/test";
test("request fixture", async ({ request }) => {
  const response = await request.get("http://localhost:3000/api/hello");
  const body = await response.body();
  console.log("Response:", body.toString());
});

test("browserName fixture", async ({ browserName }) => {
  // 可测试出浏览器的内核
  console.log("browserName:", browserName);
});
