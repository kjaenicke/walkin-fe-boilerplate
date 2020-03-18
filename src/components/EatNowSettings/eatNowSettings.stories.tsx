import React from "react";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import EatNowSettings from ".";

export default {
  title: "EatNowSettings",
  component: EatNowSettings,
  decorators: [withKnobs]
};

export const Simple = () => (
  <EatNowSettings
    isEnabled={boolean("Enabled", false)}
    onEnableChange={action("Simple.onEnableChange")}
  />
);
