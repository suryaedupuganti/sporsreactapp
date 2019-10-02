// @flow
import React from "react";

import { storiesOf } from "@storybook/react";
import { Identify } from "..";

storiesOf("Identify", module).add("default", () => (
  <Identify num={-2} num1={5}/>
));