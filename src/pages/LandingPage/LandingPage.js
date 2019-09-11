// @flow
import React from "react";

import { Navbar } from "../../components/Navbar";
import sportsIcon from "../../assets/img/sports.jpg";

import "./LandingPage.scss";

const img = {
  src: sportsIcon,
  alt: "sports icon"
};

const LandingPage = () => {
  return (
    <>
      <div className="sportsapp-navbar">
        <Navbar logo={img} title="Sports Center" user="esurya" />
      </div>
      <div className="container-fluid sportsapp-layout">
        <div className="row h-100">
          <div className="col-2 border border-primary">
            One of three columns
          </div>
          <div className="col-6 border border-primary">
            One of three columns
          </div>
          <div className="col-4 border border-primary">
            One of three columns
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
