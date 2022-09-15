// import { test, expect } from "@playwright/test";

// test("test", async ({ page }) => {
//   // Go to https://vitejs.dev/
//   await page.goto("https://vitejs.dev/");

//   // Click span:has-text("Vite")
//   await expect(page.locator('h1:has-text("Vite")')).toBeVisible();

//   // Go to https://vitejs.dev/guide/
//   await page.goto("https://vitejs.dev/guide/");

//   // Click text=ViteConf - Oct 11
//   const [page1] = await Promise.all([
//     page.waitForEvent("popup"),
//     page.locator("text=ViteConf - Oct 11").click(),
//   ]);

//   // Click h1:has-text("ViteConf")
//   await expect(page1.locator('h1:has-text("ViteConf")')).toBeVisible();

//   // Click text=Component Testing with Playwright
//   await page1.locator("text=Component Testing with Playwright").click();
//   await expect(page1).toHaveURL(
//     "https://viteconf.org/schedule/component_testing_with_playwright"
//   );

//   // Click text=Component Testing with Playwright
//   await expect(
//     page1.locator("text=Component Testing with Playwright")
//   ).toBeVisible();

//   // Click [aria-label="toggle dark mode"] >> nth=0
//   await page.locator('[aria-label="toggle dark mode"]').first().click();

//   // Click [aria-label="toggle dark mode"] >> nth=0
//   await page.locator('[aria-label="toggle dark mode"]').first().click();
// });
