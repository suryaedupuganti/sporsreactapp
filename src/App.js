// @flow

import React from "react";

import { Navbar } from "../src/components/Navbar";
import "./App.scss";

import sportsIcon from "../src/assets/img/sports.jpg";

const img = {
  src: sportsIcon,
  alt: "sports icon"
};

const App = () => {
  return (
    <div className="App">
      <Navbar logo={img} title="Sports Center" user="esurya" />
      <div class="container">
        <div class="row">
          <div class="col-sm">One of three columns</div>
          <div class="col-sm">One of three columns</div>
          <div class="col-sm">One of three columns</div>
        </div>
      </div>
    </div>
  );
};

export default App;
