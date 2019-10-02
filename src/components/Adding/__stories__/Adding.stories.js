// @flow
import React from "react";

import { storiesOf } from "@storybook/react";
import { Adding } from "..";

storiesOf("Adding", module).add("default", () => (
  <Adding word={1} word1={2} />
));
