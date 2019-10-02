// @flow
import React from "react";

type StrikeLabelProps = {
  word: string
};

export const StrikeLabel = ({ word }: StrikeLabelProps) => {
  return <strike>{word}</strike>;
};

export default StrikeLabel;
