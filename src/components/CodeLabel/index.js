// @flow
import React from "react";

type CodeLabelProps = {
  word: string
};

export const CodeLabel = ({ word }: CodeLabelProps) => {
  return   <code>{word}</code> ;
};

export default CodeLabel;
