// @flow
import React from "react";

import { Navbar } from "../../components/Navbar";

import "./LandingPage.scss";

const LandingPage = () => {
  return (
    <>
      <div className="sportsapp-navbar">
        <Navbar title="Sports Center" user="esurya" />
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
