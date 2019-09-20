// @flow
import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import { storiesOf } from "@storybook/react";
import { SportsCard } from "..";

const credits = ["batsman/rhb", "HS:183*", "bowler/spin", "BB:3/22"];
storiesOf("SportsCard", module).add("default", () => (
  <SportsCard
    name="Sachin Tendulkar"
    sport="Cricket"
    country="India"
    credits={credits}
  />
));
