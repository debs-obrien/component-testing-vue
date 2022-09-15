import { test, expect } from "@playwright/experimental-ct-vue";
import Card from "./Card.vue";
import Count from "./Count.vue";

test("should render slots", async ({ mount }) => {
  const component = await mount(
    <Card>
      <template v-slot:count>
        <Count />
      </template>
    </Card>
  );
  await expect(component).toContainText("Edit");
});
