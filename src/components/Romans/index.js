// @flow
import React from "react";

type RomanProps = {
  word: int
};
export const Roman = ({ word }: RomanProps) => {
  function renderSwitch(word) {
    switch(word) {
    case 1:
      return "I";
      case 2:
      return "II";
      case 3:
      return "III";
      case 4:
      return "IV";
      case 5:
      return "V";
      case 6:
      return "VI";
      case 7:
      return "VII";
      case 8:
      return "VIII";
      case 9:
      return "IX";
      case 10:
      return "X";
    default:
      return null;
  }
}
  return (
    <div>
      <p>The result of 1 is {renderSwitch(1)} </p>
      <p>The result of 2 is {renderSwitch(2)} </p>
      <p>The result of 3 is {renderSwitch(3)} </p>
      <p>The result of 4 is {renderSwitch(4)} </p>
      <p>The result of 5 is {renderSwitch(5)} </p>
      <p>The result of 6 is {renderSwitch(6)} </p>
      <p>The result of 7 is {renderSwitch(7)} </p>
      <p>The result of 8 is {renderSwitch(8)} </p>
      <p>The result of 9 is {renderSwitch(9)} </p>
      <p>The result of 10 is {renderSwitch(10)} </p>
    </div>
  );
};

export default Roman;
