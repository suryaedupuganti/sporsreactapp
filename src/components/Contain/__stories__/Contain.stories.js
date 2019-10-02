// @flow
import React from "react";

import { storiesOf } from "@storybook/react";
import { Contain } from "..";

storiesOf("Contain", module).add("default", () => (
  <Contain word="Hi" word1="Hello"/>
));