// @flow
import React from "react";

type MultiplicationProps = {
  word: int
};
export const Multiplication = ({ word, word1 }: MultiplicationProps) => {
  function Multiplication(p1, p2) {
    return p1 * p2;
  }

  const val = Multiplication(word, word1);

  return (
    <div>
      The result of 4*2 is {val}
    </div>
  );
};

export default Multiplication;
