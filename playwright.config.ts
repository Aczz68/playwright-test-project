import { defineConfig, devices } from "@playwright/test";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  // 比较图像中的感差度,设置默认值可将其不稳定性考虑进去
  // expect: {
  //   toHaveScreenshot: { threshold: 0.3 },
  // },

  // 设置超时的时间未 5 s
  timeout: 5 * 1000,
  // 指向的测试文件
  testDir: "./tests",
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  // 本地测试失败,应该开始调试测试
  // 默认重试两次
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: "html",
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    // 跟踪值的设置,(on-first-retry)第一次重试时有相同影响
    trace: "on-first-retry", // 'on','off','retain-on-failure','on-first-retry'
    screenshot: "only-on-failure", // 'on' ,'off' , 'only-on-failure'
    video: "retain-on-failure", // 'on','off','retain-on-failure','on-first-retry'
    // 在失败时保留,默认是关闭
    // 录制视频会减慢测试速度
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    // trace: "on-first-retry",
  },

  /* Configure projects for major browsers(为主要的浏览器配置项目) */
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },

    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },

    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
