// @flow
import React from "react";

import { storiesOf } from "@storybook/react";
import { Repeat } from "..";

storiesOf("Repeat", module).add("default", () => (
  <Repeat word="hello" num={3}/>
));