// @flow
import React from "react";

import { storiesOf } from "@storybook/react";
import { Buttons } from "..";

storiesOf("Buttons", module).add("default", () => (
 <Buttons word="start" word1="stop" />
 
));
