import { test, expect } from "@playwright/experimental-ct-vue";
import Count from "./Count.vue";

test("should increment when clicked", async ({ mount }) => {
  const component = await mount(<Count />);
  await expect(component).toContainText("count is 0");

  await component.click();
  await expect(component).toContainText("count is 1");

  await component.click();
  await expect(component).toContainText("count is 2");
});
