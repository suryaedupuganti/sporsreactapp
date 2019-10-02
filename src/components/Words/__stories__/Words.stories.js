// @flow
import React from "react";

import { storiesOf } from "@storybook/react";
import { Words } from "..";

storiesOf("Words", module).add("default", () => (
  <Words word="Hello"/>
));