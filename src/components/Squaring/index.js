// @flow
import React from "react";

type SquaringProps = {
  word: int
};
export const Squaring = ({ word, word1 }: SquaringProps) => {
  
    
  
  return <p> the result of {word} to the power of {word1} is {Math.pow(word, word1)}</p>;
};

export default Squaring;