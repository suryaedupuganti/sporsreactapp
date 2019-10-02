// @flow
import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import { storiesOf } from "@storybook/react";
import { StrikeLabel } from "..";

storiesOf("StrikeLabel", module).add("default", () => (
  <StrikeLabel word="Hello" />
));
