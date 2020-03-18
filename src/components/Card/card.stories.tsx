import React from "react";

import "../../styles/global.css";
import Card from ".";
import Well from "../Well";

export default {
  title: "Card",
  component: Card
};

export const SimpleWithoutHeading = () => (
  <Card>
    <Well>Pick a card, any card.</Well>
  </Card>
);

export const SimpleWithHeading = () => (
  <Card heading="Eat Now Features 🍽️">
    <Well>Pick a card, any card.</Well>
  </Card>
);
