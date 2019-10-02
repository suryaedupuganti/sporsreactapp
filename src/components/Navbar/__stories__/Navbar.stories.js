// @flow
import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import { storiesOf } from "@storybook/react";
import { Navbar } from "..";

storiesOf("Navbar", module).add("default", () => (
  <Navbar title1="Sports" title2="Corner" user="esurya" />
));
