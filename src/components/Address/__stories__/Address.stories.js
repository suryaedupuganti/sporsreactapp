// @flow
import React from "react";

import { storiesOf } from "@storybook/react";
import { Address } from "..";

storiesOf("Address", module).add("default", () => (
  <p>this is <Address word="My Visit us at" /></p>
));
