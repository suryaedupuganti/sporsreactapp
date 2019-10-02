// @flow
import React from "react";

import "./index.scss";

type SportsCardProps = {
  name: string,
  sport: string,
  country: string,
  credits: string[]
};

export const SportsCard = ({
  name,
  sport,
  country,
  credits
}: SportsCardProps) => {
  return (
    <div className="card sportscard">
      <div className="row no-gutters">
        <div className="col">
          <div className="row sportscard--content">
            <div className="col-md-4 sportscard--content--left">
              <img
                src="https://via.placeholder.com/150x150"
                class="card-img"
                alt="person"
              />
              <h5 className="card-title text-center">{name}</h5>
            </div>
            <div className="col-md-8 sportscard--content--right">
              <div className="card-body">
                <p className="card-text">
                  <b>Country:</b> {country}
                </p>
                <p className="card-text">
                  <b>Sport:</b> {sport}
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
          <div className="row m-0 sportscard--header">
            <div className="sportscard--header--content">
              {credits.map(c => (
                <span class="badge badge-pill badge-success mx-1">{c}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportsCard;
