// @flow
import React from "react";

import { storiesOf } from "@storybook/react";
import { Multiplication } from "..";

storiesOf("Multiplication", module).add("default", () => (
  <Multiplication word={4} word1={2} />
));