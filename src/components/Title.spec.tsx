import { test, expect } from "@playwright/experimental-ct-vue";
import Title from "./Title.vue";

test("should have a msg prop", async ({ mount }) => {
  const component = await mount(<Title msg="Vite and Playwright" />);
  await expect(component).toContainText("Vite and Playwright");
});
