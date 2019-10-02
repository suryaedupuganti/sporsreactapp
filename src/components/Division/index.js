// @flow
import React from "react";

type DivisionProps = {
  word: int
};
export const Division = ({ word, word1 }: DivisionProps) => {
  function Division(p1, p2) {
    return p1 / p2;
  }

  const val = Division(word, word1);

  return (
    <div>
      <p>The result of {word}/{word1} is {val}</p>
      
    </div>
  );
};

export default Division;