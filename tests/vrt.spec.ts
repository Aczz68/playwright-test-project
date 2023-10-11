import { test, expect } from "@playwright/test";

// 注意 快照的底层使用的是(pixelmatch)的库

// initial state should match visually
test("初始应该在视觉上的匹配", async ({ page }) => {
  // 会自动创建快照,第一次会报错,将现有截图和新截图比较,如果两者匹配则通过
  await expect(page).toHaveScreenshot("initial.png");
  2;
});

// footer masked
// 对于页面部分进行遮盖,数据包括横幅广告,信息面板,设计中需要变化部分
test("页脚蒙面", async ({ page }) => {
  await expect(page).toHaveScreenshot({
    mask: [page.locator("footer")],
  });
});

// lenient
// 限制截图阈值
test("度量程度", async ({ page }) => {
  await expect(page).toHaveScreenshot({ threshold: 0.5 });
});

// new todo input
// 单个定位的视觉测试
test("单个定位的视觉测试", async ({ page }) => {
  await expect(page.locator(".new-todo")).toHaveScreenshot();
});
