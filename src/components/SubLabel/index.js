// @flow
import React from "react";

type SubLabelProps = {
  word: string
};

export const SubLabel = ({ word }: SubLabelProps) => {
  return  <sub>{word}</sub>;
};

export default SubLabel;
