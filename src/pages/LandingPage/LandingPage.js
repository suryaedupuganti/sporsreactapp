// @flow
import React from "react";

import { Navbar } from "../../components/Navbar";
import { SportsCard } from "../../components/SportsCard";

import "./LandingPage.scss";

const LandingPage = () => {
  const sportCards = [
    {
      name: "Sachin Tendulkar",
      sport: "Cricket",
      country: "India",
      credits: ["batsman/rhb", "HS:183*", "bowler/spin", "BB:3/22"]
    },
    {
      name: "Roger Federer",
      sport: "Tennis",
      country: "Switzerland",
      credits: ["Wimbledon: 8", "Pairs Open: 5", "Total Grand Slams: 12"]
    },
    {
      name: "Wayne Rooney",
      sport: "Football",
      country: "England",
      credits: ["Goals: 98", "Rank: 1", "Hat-tricks: 6"]
    },
    {
      name: "PV Sindhu",
      sport: "Badminton",
      country: "India",
      credits: ["Olympics: 1", "Chinese Championship: 2"]
    },
    {
      name: "PV Sindhu",
      sport: "Badminton",
      country: "India",
      credits: ["Olympics: 1", "Chinese Championship: 2"]
    }
  ];
  return (
    <>
      <div className="sportsapp-navbar">
        <Navbar title1="Sports" title2="Corner" user="esurya" />
      </div>
      <div className="container-fluid sportsapp-layout">
        <div className="row h-100">
          <div className="col-3 border p-3 rounded sportsapp-layout--list">
            <div
              className="list-group sportsapp-layout--list--group"
              id="list-tab"
              role="tablist"
            >
              {sportCards.map((card, index) => {
                return (
                  <div
                    className={
                      "list-group-item list-group-item-action sportsapp-layout--list--group--item " +
                      (index === 1 ? "active" : "")
                    }
                  >
                    <SportsCard
                      name={card.name}
                      sport={card.sport}
                      country={card.country}
                      credits={card.credits}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-5 border p-3 rounded">One of three columns</div>
          <div className="col-4 border p-3 rounded">One of three columns</div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
