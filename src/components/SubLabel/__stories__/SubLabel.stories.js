// @flow
import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import { storiesOf } from "@storybook/react";
import { SubLabel } from "..";

storiesOf("SubLabel", module).add("default", () => (
  <p>This is <SubLabel word="Hello" /></p>
));
