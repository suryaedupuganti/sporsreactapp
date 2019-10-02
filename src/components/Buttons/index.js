// @flow
import React from "react";
import "../Buttons/index.scss";

type ButtonsProps = {
  word: string
};

export const Buttons = ({ word,word1 }: ButtonsProps) => {
  return (
    <div class="btn-group" style={{'width': '100%'}}>
      <button style={{'width': '50%'}}>{word}</button>
      <button style={{'width': '50%'}}>{word1}</button>
    </div>
  );
};

export default Buttons;
