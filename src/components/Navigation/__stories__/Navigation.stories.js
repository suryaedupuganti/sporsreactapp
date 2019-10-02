// @flow
import React from "react";

import { storiesOf } from "@storybook/react";
import { Navigation } from "..";

storiesOf("Navigation", module).add("default", () => (
  <Navigation L="Left" M="Middle" R="Right" U="Up"  />
));