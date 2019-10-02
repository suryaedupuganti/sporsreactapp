// @flow
import React from "react";

import { storiesOf } from "@storybook/react";
import { Division } from "..";

storiesOf("Division", module).add("default", () => (
  <Division word={100} word1={5} />
));