import React from "react";
import Switch from ".";

export default {
  title: "Switch",
  component: Switch
};

export const Checked = () => (
  <Switch
    checked
    onChange={checked => {
      console.log({ checked });
    }}
  />
);

export const UncheckedByDefault = () => (
  <Switch
    onChange={checked => {
      console.log({ checked });
    }}
  />
);

export const UncheckedExplicit = () => (
  <Switch
    checked={false}
    onChange={checked => {
      console.log({ checked });
    }}
  />
);
