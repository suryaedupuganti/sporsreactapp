// @flow
import React from "react";

const divstyle = {
  border: "solid 10px red",
  margin: "10px"
};

type IdentifyProps = {
  num: number,
  num1: number
};

export const Identify = ({ num, num1 }: IdentifyProps) => {
  function checkingnumber(num) {
    if (num >= 0) {
      return "positive";
    } else {
      return "negative";
    }
  }
  return (
    <div>
      <p>
        The result of {num} is
        <span style={divstyle}>{checkingnumber(num)} </span>
      </p>
      <p>
        The result of {num1} is
        <span style={divstyle}>{checkingnumber(num1)} </span>
      </p>
    </div>
  );
};

export default Identify;
