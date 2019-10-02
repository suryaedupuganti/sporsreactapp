// @flow
import React from "react";

type PrintProps = {
  word: string[],
};

export const Print = ({ word }: PrintProps) => {
  function Printword(word) {
    var n = word.length;
    var result="";
    var newresult="";
    for(var i=0;i<=n;i++) {
     newresult= result;
    }
    for(var j=0; j<i; j++){
newresult= newresult + word[j]
    }
    result = newresult + ""; 
    return result;
  }
  return (
    <div>
      <p>
        The result is {Printword(word)}
      </p>
    </div>
  );
};
export default Print;
