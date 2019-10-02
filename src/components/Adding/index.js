// @flow
import React from "react";

type AddingProps = {
  word: int
};
export const Adding = ({ word, word1 }: AddingProps) => {
  function Addition(p1, p2) {
    return p1 + p2;
  }

  const val = Addition(word, word1);

  return (
    <div>
      The result is {val}
    </div>
  );
};

export default Adding;
