// @flow
import React from "react";

type ArithmaticProps = {
  word: int
};
export const Arithmatic = ({ word, word1 }: ArithmaticProps) => {
  function Division(p1, p2) {
    return p1 / p2;
  }

  function Multiplication(p1, p2) {
    return p1 * p2;
  }

  function Addition(p1, p2) {
    return p1 + p2;
  }


  const mulVal = Multiplication(word, word1);
  const divVal = Division(word, word1);
  const addVal = Addition(word, word1);
  return (
    <div>
      <p>The result of {word} * {word1} is {mulVal}</p>
      <p>The result of {word} / {word1} is {divVal}</p>
      <p>The result of {word} + {word1} is {addVal}</p>
      
    </div>
  );
};

export default Arithmatic;