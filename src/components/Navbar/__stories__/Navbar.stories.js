// @flow
import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import { storiesOf } from "@storybook/react";
import { Navbar } from "..";
import sportsIcon from "../../../assets/img/sports.jpg";

const img = {
  src: sportsIcon,
  alt: "sports icon"
};

storiesOf("Navbar", module).add("default", () => (
  <Navbar logo={img} title="Sports Center" user="esurya" />
));
