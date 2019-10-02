// @flow
import React from "react";

const divstyle = {
  border: "solid 10px red",
  margin: "10px"
};

type ContainProps = {
  word: string,
  word1: string
};

export const Contain = ({ word, word1 }: ContainProps) => {
  function checking(word) {
    if (word.includes(word1)) {
      return "true";
    } else {
      return "false";
    }
  }
  return (
    <div>
      <p>
        The result of {word} is {checking(word)}
      </p>
    </div>
  );
};

export default Contain;
