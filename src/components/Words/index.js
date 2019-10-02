// @flow
import React from "react";

const divstyle = {
 border: 'solid 10px red',
 margin:'10px',
}

type WordsProps = {
  word: String
};

export const Words = ({ word }: WordsProps) => {
 
  return (
  
      <p><span style={divstyle}>{word.charAt(0)}</span> is the Firstletter of {word}</p>
    
  );
};

export default Words;