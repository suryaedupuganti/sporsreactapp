// @flow
import React from "react";

const divstyle = {
    border: "solid 10px red",
    margin: "10px"
  };

type CalendarProps = {
  word: int
};
export const Calendar = ({ word }: CalendarProps) => {
  function renderSwitch(word) {
    switch(word) {
    case 1:
      return "January";
      case 2:
      return "February";
      case 3:
      return "March";
      case 4:
      return "April";
      case 5:
      return "May";
      case 6:
      return "June";
      case 7:
      return "July";
      case 8:
      return "August";
      case 9:
      return "September";
      case 10:
      return "October";
      case 11:
      return "November";
      case 12:
      return "December";
    default:
      return null;
  }
}
  return (
     
     <div  style={divstyle}> 
     <p>The 1st month of the Year is {renderSwitch(1)} </p>
      <p>The 2nd month of the Yearis  {renderSwitch(2)} </p>
      <p>The 3rd month of the Year is {renderSwitch(3)} </p>
      <p>The 4th month of the Year is {renderSwitch(4)} </p>
      <p>The 5th month of the Year is {renderSwitch(5)} </p>
      <p>The 6th month of the Year is {renderSwitch(6)} </p>
      <p>The 7th month of the Year is {renderSwitch(7)} </p>
      <p>The 8th month of the Year is {renderSwitch(8)} </p>
      <p>The 9th month of the Year is {renderSwitch(9)} </p>
      <p>The 10th month of the Year is {renderSwitch(10)} </p>
      <p>The 11th month of the Year is {renderSwitch(11)} </p>
      <p>The 12th month of the Year is {renderSwitch(12)} </p>
     
    </div>
    
  );
};

export default Calendar;