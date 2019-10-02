// @flow
import React from "react";

import { storiesOf } from "@storybook/react";
import { Arithmatic } from "..";

storiesOf("Arithmatic", module).add("default", () => (
  <Arithmatic word={100} word1={5} />
));