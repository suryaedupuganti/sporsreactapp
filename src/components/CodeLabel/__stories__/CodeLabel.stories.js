// @flow
import React from "react";

import { storiesOf } from "@storybook/react";
import { CodeLabel } from "..";

storiesOf("CodeLabel", module).add("default", () => (
  <p>this is <CodeLabel word="My First Demo" /></p>
));
