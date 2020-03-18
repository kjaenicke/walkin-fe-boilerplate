import React from "react";
import { action } from "@storybook/addon-actions";
import Switch from ".";

export default {
  title: "Switch",
  component: Switch
};

export const Basic = () => (
  <Switch checked onChange={action("Basic.onChange")} />
);

export const UncheckedByDefault = () => (
  <Switch onChange={action("UncheckedByDefault.onChange")} />
);

export const UncheckedExplicit = () => (
  <Switch checked={false} onChange={action("UncheckedExplicit.onChange")} />
);
