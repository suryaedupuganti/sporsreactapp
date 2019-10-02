// @flow
import React from "react";

type RepeatProps = {
  word: string,
  num: number
};

export const Repeat = ({ word, num }: RepeatProps) => {
  function repeatedword(word) {
    var l = 0;

    var result = "";
    while (l < num) {
      if (l === num - 1) {
        result = result + word;
      } else {
        result = result + word + "-";
      }
      l++;
    }

    return result;
  }
  return (
    <div>
      <p>
        The result of {word} is {repeatedword(word)}
      </p>
    </div>
  );
};

export default Repeat;
