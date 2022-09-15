import { test, expect } from "@playwright/experimental-ct-vue";
import Title from "./Title.vue";

test("should show a h1", async ({ mount }) => {
  const component = await mount(Title, {
    props: {
      msg: "Vite and Playwright edit and it will work",
    },
  });
  await expect(component).toContainText("Vite and Playwright");
});
