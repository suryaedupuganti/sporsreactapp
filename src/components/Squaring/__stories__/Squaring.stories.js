// @flow
import React from "react";

import { storiesOf } from "@storybook/react";
import { Squaring } from "..";

storiesOf("Squaring", module).add("default", () => (
  <Squaring word={5} word1={2}/>
));